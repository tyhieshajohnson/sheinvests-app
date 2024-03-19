import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import { config } from "dotenv";
config();
import auth from "./middleware/middleware.js";

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json()); // Use the built-in express.json() middleware
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:8080',
}));
// app.use(cors({
//   origin: ['http://localhost:8080', 'https://sheinvests-app-api.onrender.com'],
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(new URL(import.meta.url).pathname, "../public/index.html")
  );
});

// Routes
app.use("/", routes)
app.use("/add", routes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// json comes with 2 functions
// 1. sign() 
// set to a variable to an object: let token = sign({user_id, username}, SECRET_KEY, {expires_in})

// 2. verify
// use it as a calllback function or a variable
// a. callback function:
// 