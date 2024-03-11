import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const SECRET_KEY = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  let token = req.headers.authorization;
//   let tokenInHeader = cookie && cookie.split("=")[1];
  if (token === null) res.sendStatus(401);
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export default auth;
console.log(process.env.SECRET_KEY);

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
