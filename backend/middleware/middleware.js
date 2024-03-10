import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const authorization = async (req, res, next) => {
  try {
    const { cookie } = req.headers;

    // checks if there's a cookie and then splits it
    const tokenInHeader = cookie && cookie.split('=')[1];

    if (tokenInHeader === undefined) {
      res.status(401).send({ msg: "No valid token" });
    } else {
      jwt.verify(
        tokenInHeader,
        process.env.SECRET_KEY,
        { expiresIn: "1h" }, // Set your desired expiration time (e.g., 1 hour)
        (err, user) => {
          if (err) {
            // Handle specific errors
            if (err.name === 'TokenExpiredError') {
              res.status(401).send({ msg: "Token expired" });
            } else {
              res.status(403).send({ msg: "Invalid token" });
            }
          } else {
            req.user = user;
            next();
          }
        }
      );
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

export default authorization;
console.log(process.env.JWT_SECRET);