import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const SECRET_KEY = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  let token = req.headers.authorization;
  let login = verifyToken({user_id, username, passwords }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
  // let tokenInHeader = cookie && cookie.split("=")[1];
  if (token === null) res.sendStatus(401);
  // it takes the token either from the headers in the response
  // in  it'll take the

  // user is the information about the user
  // err - checks if token is expired
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    // 403 expired token
    if (err) return res.sendStatus(403);
    // request
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

// const authorization = async (req, res, next) => {
//     try {
//       const { cookie } = req.headers;

//       const tokenInHeader = cookie && cookie.split('=')[1];

//       if (tokenInHeader === undefined) {
//         res.status(401).send({ msg: "No valid token" });
//       } else {
//         jwt.verify(
//           tokenInHeader,
//           process.env.SECRET_KEY,
//           (err, user) => {
//             if (err) {
//               // Handle specific errors
//               if (err.name === 'TokenExpiredError') {
//                 res.status(401).send({ msg: "Token expired" });
//               } else {
//                 res.status(403).send({ msg: "Invalid token" });
//               }
//             } else {
//               req.user = user;
//               next();
//             }
//           }
//         );
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ msg: "Internal Server Error" });
//     }
//   };
