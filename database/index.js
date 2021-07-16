import mongoose from 'mongoose'

const connect = () => {
    const url = 'mongodb+srv://davidxavier:DavidXavier_2021$@cluster0.wmp1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(url, options)
}

export default {
    connect
}