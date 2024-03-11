import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const SECRET_KEY = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token === null) res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
};

console.log(process.env.SECRET_KEY);
export default auth;

// json comes with 2 functions
// 1. sign()
// set to a variable to an object: let token = sign({user_id, username}, SECRET_KEY, {expires_in})

// 2. verify
// use it as a calllback function or a variable
// a. callback function: