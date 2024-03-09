import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const authorization = (req, res, next) => {
  const token = req.headers.authorize;

  if (!token) {
    return res.status(401).json({ message: "Header missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }
    req.user = decoded;
    const decodedToken = jwt.decode(token);
    console.log(decodedToken);
    next();
  });
};

console.log(process.env.JWT_SECRET);

export default authorization;