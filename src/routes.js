import  {Router} from 'express';
import MyController from './app/controllers/myController'
const routes = new Router()

routes.get('/', MyController.method)
export default routes