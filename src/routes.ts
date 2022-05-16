import {Router} from 'express'
import {CreateUserController} from './controllers/UserController'

const router = Router()
const createUserController = new CreateUserController()

router.post('/users',createUserController.handle)
// router.post('/tags')

export { router }