import { pool } from "../config/index.js";
import { config } from "dotenv";
config();

// USERS
// Creating a /add 'users' class.
const addUser = async ( username, email, passwords) => {
    // pool object used to make query function asynchronously
    // the query then inserts a new user into the userTable
    // placeholders are used to replace existing values
     await pool.query(
      `
        INSERT INTO users (username, email, passwords) VALUE (?,?,?)
      `,
      [username, email, passwords]
    );

    // return the new user object 
    // return newUser;
  };  

// Creating a /get 'users class

// Creating a /post 'users' class

// Creating a /delete 'users' class

// INVESTMENTS
//Creating a /add 'investments' class
const addInvest = async ( user_id, crypto_name, amount) => {
    // pool object used to make query function asynchronously
    // the query then inserts a new user into the userTable
    // placeholders are used to replace existing values
     await pool.query(
      `
        INSERT INTO investments (user_id, crypto_name, amount) VALUE (?,?,?)
      `,
      [user_id, crypto_name, amount]
    );
    // return the new user object
    // return newUser;
  }; 

// Creating a /get 'investments' class

// Creating a /post 'investments' class

// Creating a /delete 'investments' class

export{addUser,addInvest}