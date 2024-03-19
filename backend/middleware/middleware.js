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