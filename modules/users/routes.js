import UserController from './controller'
import autenticarMid from '../../middlewares/middlewares'

const BASE_URL = '/users'

export const initialize  = (api) => {
    //ROTAS
    api.get(BASE_URL, UserController.getUsers)
    api.post(BASE_URL, UserController.createUser)
    api.patch(`${BASE_URL}/:id`, UserController.updateUser)
    api.delete(`${BASE_URL}/:id`, UserController.deleteUser)
    api.post(`${BASE_URL}/login`, UserController.autenticador)
    
    api.get(`${BASE_URL}/secret`, autenticarMid, UserController.secretRoute)
    
}

export default {
    initialize
}