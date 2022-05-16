// server -> (controller) -> (service -validation/verification) -> (DB)

import {PrismaClient} from '@prisma/client'

interface IUserRequest{
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}
class CreateUserService{
  private prisma: PrismaClient

  constructor(){
    this.prisma = new PrismaClient()
  }

  async execute({name,email, admin, password} : IUserRequest){
    if(!email){
      throw new Error('Email is required')
    }
    const userAlreadyExists = await this.prisma.user.findUnique({
      where:{
        email: email
      }
    })

    if(userAlreadyExists){
      throw new Error('User already exists')
    }
    
    const user = await this.prisma.user.create({
      data:{
        name,
        email,
        admin,
        password,
      }
    })
    return user
  }
  

}

export {CreateUserService}
