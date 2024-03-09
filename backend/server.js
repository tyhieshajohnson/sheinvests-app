import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import { config } from "dotenv";
config();
import authorization from "./middleware/middleware.js";

const PORT = process.env.port;
const app = express();

// Middleware
app.use(express.json()); // Use the built-in express.json() middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({}));
app.use(express.static("static"));

// Routes
app.use(authorization, routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});