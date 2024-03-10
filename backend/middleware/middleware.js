import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const authorization = (req, res, next) => {
    const token = req.headers["Authorization"];
  
    if (!token) {
      return res.status(401).json({ message: "Header missing" });
    }
  
    // Split the token from the 'Bearer ' prefix
    const parts = token.split(' ');
    if (parts.length !== 2) {
      return res.status(401).json({ message: "Invalid token format" });
    }
  
    const tokenPart = parts[1];
  
    jwt.verify(tokenPart, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          // If the token has expired, return a meaningful message
          return res.status(401).json({ message: "Token has expired" });
        }
        return res.status(401).json({ message: "Invalid token" });
      }
      req.user = decoded;
      const decodedToken = jwt.decode(tokenPart);
      console.log(decodedToken);
      next();
    });
  };
console.log(process.env.JWT_SECRET);

export default authorization;