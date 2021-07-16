import JWT from '../../helpers/jwt'


//CONSTROLES  DE USUARIO

import UserService from './service'

//BUSCA TODOS USUARIOS
export const getUsers = async (req, res) => {
    const users = await UserService.getUsers()
    res.send(users)

}

// CRIAR USUARIO
export const createUser = async (req, res) => {
    const newUser = req.body
    await UserService.createUser(newUser)
    res.send(newUser)
}


//ATUALIZA USUARIO
export const updateUser = async (req, res) => {
    const id = req.params.id
    const changes = req.body
    
    const updatedUser = await UserService.updateUser(id, changes)

    res.send(updatedUser)
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    await UserService.deleteUser(id)
    res.send(`Usuario "${id}" deletado`)
}


// AUTETICAR LOGIN
export const autenticador = async (req, res) => {
    const {email, senha} = req.body
    if(!email || !senha) return res.status(400).send('DEU ERRO')

    const user = await UserService.buscaUserEmail(email)
    if(!user) return res.status(404).send('Email Incorreto')

    if(user.senha !== senha ) return res.status(401).send('Senha Errada')

    const payload = {
        id: user._id,
        email: user.email
    }
    const token = JWT.sign(payload)

    res.send({token})
}

export const secretRoute = async  (req, res) => {
    res.send(`Olá ${req.decodedToken.email}, seja Bem-vindo. `)
}

export default {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    autenticador,
    secretRoute
}