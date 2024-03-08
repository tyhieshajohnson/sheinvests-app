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

// Creating a /get/users ALL users
const getUsers = async (req,res) => {
    const [users] = await pool.query(
        `
        SELECT * FROM users
        `
    );
    return users;
};

// Creating a /get/users/:id SPECIFIC user
const getUser = async (re,res) => {
    const [users] = await pool.query(
        `
        SELECT * FROM users WHERE id = ?
        `,
        [id]
    );
    return user;
};

// Creating a /post 'users' class
const editUser = async (username, email, password) => {
    const [users] = await pool.query(
        `
        UPDATE users SET
        username = ?,
        email = ?,
        password = ? WHERE
        (username, email, password)
        `
    );
    return users;
};

// Creating a /delete 'users' class
const deleteUser = async (id) => {
    const [users] = await pool.query(
        `
        DELETE FROM users WHERE id
        `, [id]
    );
    return users;
};

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

// Creating a /get/investments ALL investments
const getInvestments = async (req, res) => {
    const [investments] = await pool.query(
        `
        SELECT * FROM investments
        `
    );
    return investments
};

// Creating a /get/investments/:id SPECIFC investments
const getInvestment = async (user_id) => {
    const [investments] = await pool.query(
        `
        SELECT * FROM investments WHERE user_id = ?
        `, [user_id]
    );
    return investments
};

// Creating a /post investments
const editInvestment = async (crypto_name, amount) => {
    const [investments] = await pool.query (
        `
        UPDATE investments SET crypto_name
        `
    );
}

// Creating a /delete/id SPECIFIC investments
const deleteInvestment = async (user_id) => {
    const [investments] = await pool.query(
        `
        DELETE FROM investment WHERE user_id = ?
        `, [user_id]
    );
    return investments
};

export{addUser, getUser, getUsers, addInvest}