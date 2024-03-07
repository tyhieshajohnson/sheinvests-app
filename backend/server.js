import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

import { config } from "dotenv";
config();
import mysql from "mysql2";
import bcrypt from "bcrypt";
import { userAdd, investAdd } from "./controller/controller.js";

const PORT = process.env.port;
const app = express();
app.use(express.json());
// Cross origin resource sharing - a security feature prevents security vulnerabilities.
app.use(cors({}));
app.use(express.static("static"));
app.use(routes);
app.use(cookieParser());

// defining user routes
// app.use("/", userRouter);

// defining user routes of our server
// app.use("/add", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// app.get('/users', async (req, res) => {
//   try {
//     const [users] = await pool.execute('SELECT * FROM users');
//     res.json({ result: users });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/users', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const [result] = await pool.execute(
//       'INSERT INTO users (username, email, passwords) VALUES (?, ?, ?)',
//       [username, email, password]
//     );

//     res.json({ result: 'User successfully registered' });
//   } catch (error) {
//     console.error('Error inserting user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
