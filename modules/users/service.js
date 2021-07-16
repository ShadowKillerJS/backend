import UserModel from './model'

// COMEÇANDO SERVIÇOS

// BUSCANDO USUARIOS
export const getUsers = async () => {
    const users = await UserModel.find()
    return users
}

// RETORNA USUARIO POR EMAIL
export const buscaUserEmail = async (email) => {
    const user = await UserModel.findOne({email})
    return user
}

// CRIANDO USUARIO
export const createUser = async (newUser) => {
    const createdUser = await UserModel.create(newUser)
    return createdUser
}

// ATUALIZANDO USUARIO
export const updateUser = async (id, changes) => {
 const user = await UserModel.findById(id)
 Object.assign(user, changes)
 await user.save()
return user
}

// DELETANDO USUARIO
export const deleteUser = async (id) => {
    await UserModel.findByIdAndDelete(id)
}

export default {
    getUsers,
    updateUser,
    createUser,
    deleteUser,
    buscaUserEmail
}
