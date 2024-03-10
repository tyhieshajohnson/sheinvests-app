import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const authorization = async (req, res, next) => {  

    let {cookie} = req.headers;
     
    // checks if theres a cookie and then splits it
    let tokenInHeader = cookie && cookie.split('=')[1];

    if (tokenInHeader === undefined) {
        res.status(401).send({msg:"No valid token"});   
    } else{
        console.log(tokenInHeader);

        jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {
            if (err) res.sendStatus(403);
            req.user = user;
        });

        next();
    }

     
} 

export default authorization;
console.log(process.env.JWT_SECRET);