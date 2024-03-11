import { addUser, 
  getUser, 
  getUsers, 
  addInvest, 
  editUser, 
  getUsersByUsername ,
  deleteUser, 
  getInvestments, 
  editInvestment,
  deleteInvestment,
  } from "../model/index.js";
import express from "express";
import mysql from "mysql2";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { COINGECKO_API_URL } from '../config/index.js';
import verifyToken from "../middleware/middleware.js";

// Load environment variables from .env file
config();

//USERS
// 1. /add user
const userAdd = async (req, res) => {
  try {
    const { username, email, passwords } = req.body;

    // Validate that all required fields are present in the request body
    if (!username || !email || !passwords) {
      return res.status(400).send({ error: 'Missing required fields' });
    }

    // Check if the user already exists
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: 'User Already Exists' });
    }

    // Hash the password
    const hash = await bcrypt.hash(passwords, 10);

    // Call the addUser function with the hashed password
    await addUser(username, email, hash);

    res.json({ msg: 'User added successfully' });
  } catch (err) {
    console.error("Error in userAdd:", err);

    // Handle specific bcrypt errors
    if (err.message.includes('data and salt arguments required')) {
      return res.status(400).send({ error: 'Invalid password provided' });
    }

    // Handle other errors
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};



// User Add FUNCTIONING

// ADD USER WITH JSONWEBTOKEN

const userLogin = async (req, res) => {
  const { username, passwords } = req.body;

  try {
    // Check if username and passwords are present in the request body
    if (!username || !passwords) {
      return res.status(400).json({
        message: "Username and password are required"
      });
    }

    const [user] = await getUsersByUsername(username);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }

    console.log("Received password:", passwords);
    console.log("Stored hashed password:", user.passwords);

    const validPassword = bcrypt.compare(passwords, user.passwords);
    if (!validPassword) {
      console.log("Invalid password for user:", user);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );

    res.json({ user, token });
  } catch (error) {
    console.error('Error in userLogin:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      details: error.message
    });
  }
};

// 2. /get ALL users
const getClients = async (req, res) => {
  try {
      const users = await getUsers();
      res.status(200).json(users);
  } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ token:token});
  }
};
// User Retrieval of all FUNCTIONING

// 3. /get/:id SPECIFIC user
const getClient = async (req, res) => {
  try {
      const userId = +req.params.id;
      const user = await getUser(userId);

      if (!user) {
          res.status(404).json({ error: 'User not found' });
          return;
      }

      res.json(user);
  } catch (error) {
      console.error('Error handling client request:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
// User Retrieval FUNCTIONING

//4. /edit a SPECIFIC user
const userEdit = async (req, res) => {
  try {
      const id = +req.params.id
      const { username, email, passwords} = req.body;
      let existingUser = await getUser(id);

      if (!existingUser) {
          res.status(404).json({ error: 'User not found' });
          return;
      }

      let updatedUsername = username || existingUser.username;
      let updatedEmail = email || existingUser.email;
      let updatedPassword = passwords || existingUser.passwords;

      await editUser( updatedUsername, updatedEmail, updatedPassword,id);

      // Retrieve and send the updated user information
      const updatedUser = await getUser(id);
      res.json(updatedUser);
  } catch (error) {
      console.error('Error handling user edit:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
// User edit FUNCTIONING

// 4. /delete SPECIFIC user
const userDelete = async (req, res) => {
  try {
      const userId = +req.params.id;

      // Log the userId to check if it's correct
      console.log("Deleting user with ID:", userId);

      // Attempt to delete the user
      const deletedUser = await deleteUser(userId);

      if (!deletedUser) {
          // User not found
          return res.status(404).send("User not found");
      }

      // User deleted successfully, retrieve updated user list
      const updatedUsers = await getUsers();

      res.json(updatedUsers);
  } catch (error) {
      // Error handling for any unexpected errors
      console.error("Error in userDelete:", error.message);
      res.status(500).send("Internal Server Error");
  }
};
// Delete SPECIFIC User Functioning
 
// INVESTMENTS
// /add an investment
// const investAdd = async (req, res) => {
//   const { user_id, crypto_name, amount } = req.body;
//   const userId = req.user.user_id;
//   console.log(req.body);
//   await addInvest(userId, crypto_name, amount);
//   res.send({
//     msg: "Invested successfully",
//   });
// };
const investAdd = async (req, res) => {
  try {
    const { crypto_name, amount } = req.body;
    const userId = req.user.user_id;

    // Validate that required fields are present in the request body
    if (!crypto_name || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await addInvest(userId, crypto_name, amount);

    res.status(201).json({
      msg: "Invested successfully",
    });
  } catch (error) {
    console.error('Error in investAdd:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      details: error.message
    });
  }
};
console.log('User ID:', userId); 
// const investAdd = async (req, res) => {
//   try {
//     const { crypto_name, amount } = req.body;
//     const userId= req.user ? req.user.id : null;

//     // Validate that required fields are present in the request body
//     if (!crypto_name || !amount) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     if (!userId) {
//       return res.status(401).json({ error: 'User not authenticated' });
//     }

//     await addInvest(userId, crypto_name, amount);

//     res.status(201).json({
//       msg: "Invested successfully",
//     });
//   } catch (error) {
//     console.error('Error in investAdd:', error);
//     res.status(500).json({
//       error: 'Internal Server Error',
//       details: error.message
//     });
//   }
// };
// Investments Add Is Functioning

//get ALL investments
const investsGet = async (req, res) => {
  const allInvestments = await getInvestments();
  res.send(allInvestments);
};
// Get All Invests Functioning

// /get SPECIFIC investments /:id
const investGet = async (req, res) => {
  res.send(await getInvestments(+req.params.user_id))
};
// Get SPECIFIC  Investments FUNCTIONING

// /edit SPECIFC investments /:id
const investEdit = async (req, res) => {
  try {
    const { user_id, crypto_name, amount } = req.body;

    // Retrieve existing investment information
    const existingInvestment = await getInvestments(req.params.user_id);

    if (!existingInvestment) {
      res.status(404).json({ error: 'Investment not found' });
      return;
    }

    // Update investment information
    const updatedUserId = user_id || existingInvestment.user_id;
    const updatedCryptoName = crypto_name || existingInvestment.crypto_name;
    const updatedAmount = amount || existingInvestment.amount;

    await editInvestment(req.params.user_id, updatedCryptoName, updatedAmount);

    res.json({ success: true });
  } catch (error) {
    console.error('Error handling investment edit:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Editing SPECIFIC investment FUNCTIONING

// /delete SPECIFIC investments /:user_id
const investDelete = async (req, res) => {
  try {
      const userId = +req.params.user_id;

      // Log the userId to check if it's correct
      console.log("Deleting investment with user ID:", userId);

      // Attempt to delete the investment
      const deletedInvestment = await deleteInvestment(userId);

      if (!deletedInvestment) {
          // Investment not found
          return res.status(404).send("Investment not found");
      }

      // Investment deleted successfully, retrieve updated investment list
      const updatedInvestments = await getInvestments();

      res.json(updatedInvestments);
  } catch (error) {
      // Error handling for any unexpected errors
      console.error("Error in investDelete:", error.message);
      res.status(500).send("Internal Server Error");
  }
};
// Deleting SPECIFIC investment FUNCTIONING

// COINGECKO ROUTING
// export const getCoinData = async (coinId) => {
//   try {
//     const response = await axios.get(`${COINGECKO_API_URL}/coins/${coinId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


// export to routes
export { userAdd, userLogin, getUsers, getUser, investAdd, getClients, getClient, userEdit, userDelete, investsGet, investGet, investEdit, investDelete }; 
