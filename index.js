import fs from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './modules/users/routes'
import Database from './database'
import cors from 'cors'

Database.connect()

const PATCH_NAME = "./modules"
const porta = 5005
const api = express()
api.use(bodyParser.json())

api.use(cors())

const modules = fs.readdirSync(PATCH_NAME)
    for (const module of modules) {
        const routes = require(`${PATCH_NAME}/${module}/routes`)
        routes.initialize(api)
    }

userRoutes.initialize(api)
    api.listen(porta, () => {
        console.log(`Servidor escutando a porta ${porta}.`)
    })