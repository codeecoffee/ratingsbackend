import {Router} from 'express'
import { CreateTagController } from './controllers/TagController'
import {CreateUserController} from './controllers/UserController'
import express,{Request, Response, NextFunction} from 'express'
import {ensureAdmin} from './middlewares/ensureAdmin'

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

const use = fn =>(request: Request, response: Response, next: NextFunction)=>{
  Promise.resolve(fn(request, response, next)).catch(next)
}

// router.use(ensureAdmin)
router.post('/users',use(createUserController.handle))
router.post('/tags', ensureAdmin, use(createTagController.handle))

export { router }