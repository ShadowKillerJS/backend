import JWT from 'jsonwebtoken'

const JWT_SECRET = 'MEU SEGREDO :D'

const sign = (payload) => JWT.sign(payload, JWT_SECRET)
const verify = (token) => JWT.verify(token, JWT_SECRET)
const decode = (token) => JWT.decode(token, JWT_SECRET)


export default {
    sign,
    verify,
    decode
}