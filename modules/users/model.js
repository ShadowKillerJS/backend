import mongoose from 'mongoose'

const UserSchema = {
    login: String,
    senha: Number,
    codigo: Number,
    cpf: Number,
    email: String,
    criado: {
        type: Date,
        default: Date.now()
    }
    
}

const UserModel = mongoose.model('User', UserSchema)

export default UserModel