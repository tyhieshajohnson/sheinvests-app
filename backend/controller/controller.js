import { addUser, addInvest } from "../model/index.js";
import express from "express";
import mysql from "mysql2";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Load environment variables from .env file
config();

//USERS
const userAdd = async (req, res) => {
    try {
      const { username, email, passwords } = req.body;
  
      // Validate that all required fields are present in the request body
      if ( !username || !email || !passwords) {
        return res.status(400).send({ error: 'Missing required fields' });
      }
  
      // Hash the password
      const hash = await bcrypt.hash(passwords, 10);
  
      // Call the addUser function with the hashed password
      await addUser(username, email, hash);
  
      res.send({
        msg: 'User added successfully',
      });
    } catch (err) {
      console.error(err);
  
      // Handle specific bcrypt errors
      if (err.message.includes('data and salt arguments required')) {
        return res.status(400).send({ error: 'Invalid password provided' });
      }
  
      res.status(500).send({
        error: 'Internal Server Error',
      });
    }
  };
  
// INVESTMENTS
const investAdd = async (req, res) => {
  const { user_id, crypto_name, amount } = req.body;
  console.log(req.body);
  await addInvest(user_id, crypto_name, amount);
  res.send({
    msg: "Invested successfully",
  });
};

// export
export { userAdd, investAdd };

// Start the server
// const PORT = process.env.PORT || 3030;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
