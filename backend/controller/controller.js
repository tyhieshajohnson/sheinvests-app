import { addUser, getUser, getUsers, addInvest, editUser } from "../model/index.js";
import express from "express";
import mysql from "mysql2";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Load environment variables from .env file
config();

//USERS

// 1. /add user
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

// 2. /get ALL users
const getClients = async (req, res) => {
  try {
      const users = await getUsers();
      res.status(200).json(users);
  } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

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

//4. /

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

// 4. /delete SPECIFIC user
const userDelete = async (req, res) => {
    await deleteUser(+req.params.id)
    res.send(await getUsers())
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
export { userAdd, getUsers, getUser, investAdd, getClients, getClient, userEdit };

// Start the server
// const PORT = process.env.PORT || 3030;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
