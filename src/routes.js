import  {Router} from 'express';
import Authentication from './middleware/auth'
import MyController from './app/controllers/myController'
const routes = new Router()

routes.use(Authentication);
routes.get('/', MyController.method)
export default routes