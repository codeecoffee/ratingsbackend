import { PrismaClient } from '@prisma/client';

class CreateTagService{
  private prisma: PrismaClient;

  constructor(){
    this.prisma = new PrismaClient();
  }

  async execute(name: string){
    
    if(!name) throw new Error('Name is required');

    const tagAlreadyExists = await this.prisma.tag.findUnique({
      where:{
        name: name
      }      
    })
    if(tagAlreadyExists) throw new Error('Tag already exists');

    const tag = await this.prisma.tag.create({
      data:{
        name
      }
    })

    return tag;
  }

}

export {CreateTagService}