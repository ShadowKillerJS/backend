import JWT from '../helpers/jwt'

const autenticarMid = (req, res, next) => {
    const token = req.headers.authorization.replace('Bearer', '').trim()
    try{
        const decodedToken = JWT.decode(token) // Decodifica o Token
        req.decodedToken = decodedToken // Guarda na Request para os Proximos
        next()
    }catch(e) {
        // Algo dentro do Try deu uma Exception...
        return res.status(401).send('ACESSO NÃO AUTORIZADO')
    }
}

export default autenticarMid