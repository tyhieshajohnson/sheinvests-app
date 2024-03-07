import jwt from "jsonwebtoken";
import {config} from "dotenv";
config()

const SECRET_KEY = process.env.SECRET_KEY

const validate = (req, res, next) => {
    let {cookies} = req.headers
    let token = cookie && cookie.split('=')[1]
    if(token===null) res.sendStatus(404)
    jwt.verify(token, process.env.SECRET_KEY, (err, user)=> {
        if(err) return res.sendStatus(401)
        req.user = user
    next()
    })
}
console.log(SECRET_KEY);
export {validate} 