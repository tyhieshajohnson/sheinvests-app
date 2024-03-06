import { addInvest } from "../model/investments.js";
import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
import { config } from "dotenv";
// import { checkIfAuthenticated } from "../auth/auth.js";

// Load environment variables from .env file
config();

// Create an instance of express and configure body-parser
const app = express();
const jsonParser = bodyParser.json();
app.use(checkIfAuthenticated);

// Add a route to insert data into the investments table
app.post("/investments", jsonParser, async (req, res) => {
  const { user_id, crypto_name, amount } = req.body;

  try {
    // Insert data into the investments table
    const result = await addInvest(user_id, crypto_name, amount);
    res.send({
      msg: "Investment added successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send("Failed to add investment");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Add a middleware function to check if user is authenticated
// const checkIfAuthenticated = (req, res, next) => {
//   if (!req.isAuthenticated) {
//     return res.status(401).send("Unauthorized");
//   }
//   next();
// };