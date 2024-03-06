// Importing the 'pool' object from the '../config/index.js' file.
import { pool } from "../config/index.js";

import { config } from "dotenv";
config();

// Creating a 'users' class.
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
 
// Exporting the 'users' class for use in other modules.
export { addInvest };