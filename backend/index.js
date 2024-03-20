import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import { config } from "dotenv";
import {pool} from "./config/index.js"
import WebSocketController from "./controller/webSocket.js"
config();
import auth from "./middleware/middleware.js";

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json()); // Use the built-in express.json() middleware
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
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

// Define the /users/:id route
app.get("/user/:id", async (req, res) => {
  try {
    // Get the user ID from the request parameters
    const id = req.params.id;

    // Query the users table for the user with the given ID
    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [id]);

    // Return the user data as a JSON response
    res.json(rows);
  } catch (error) {
    console.error(error);

    // Return a 500 Internal Server Error response with an error message
    res.status(500).send({
      error: "An error occurred while fetching the user's data.",
    });
  }
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