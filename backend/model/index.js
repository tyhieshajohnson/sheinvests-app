import { pool } from "../config/index.js";
import { config } from "dotenv";
config();

const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';

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

    // Generate a JWT token
    // const token = jwt.sign({ username, email }, jwtSecret, { expiresIn: '1h' });
    // // Return the new user object and the JWT token
    // return { username, token };
  };  
// Add users FUNCTIONING

// JSONWEBTOKEN
// const loginUser = async (username) => {
//     console.log("Username", username);
//     const [users] = await pool.query(
//         `
        
//         SELECT * FROM users WHERE username = ?`
//     );
//     return users;
// }

const getUsersByUsername = async(username) => {
    console.log("🚀 ~ getUsersByUsername ~ username:", username);
    const [users] = await pool.query(
        `
        SELECT *
        FROM users
        WHERE username = ?
        `,

        [username]
    );
    return users;
}

// Creating a /get/users ALL users
const getUsers = async (req, res) => {
    try {
        const [users] = await pool.query(
            `
            SELECT * FROM users
            `
        );
        return users;
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).send('Internal Server Error');
    }
};
// Get Users FUNCTIONING

// Creating a /get/users/:id SPECIFIC user
const getUser = async (id) => {
    try {
        const [user] = await pool.query(
            `
            SELECT * FROM users WHERE id = ?
            `,
            [id]
        );

        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error;
    }
};
// Get SPECIFIC user FUNCTIONING

// Creating a /post 'users' class
const editUser = async (username, email, passwords,id) => {
    try {
        console.log('Updating user:',  username, email, passwords, id);

        const [users] = await pool.query(
            `
            UPDATE users SET
            username = ?,
            email = ?,
            passwords = ?
            WHERE id = ?
            `,
            [username, email, passwords, id]
        );

        console.log('User updated successfully:', users);

        return users;
    } catch (error) {
        console.error('Error updating user:', error.message);
        throw error;
    }
};
// Update user FUNCTIONING

// Creating a /delete 'users' class
const deleteUser = async (id) => {
    const [result] = await pool.query(
        `
        DELETE FROM users WHERE id = ?
        `, [id]
    );
    return result.affectedRows > 0; // Return true if a user was deleted, false otherwise
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

// Creating a /patch investments
const editInvestment = async (user_id, crypto_name, amount) => {
    const [result] = await pool.query (
        `
        UPDATE investments SET crypto_name = ?, amount = ? WHERE user_id = ?
        `, [crypto_name, amount, user_id]
    );
    return result.affectedRows > 0; // Return true if an investment was updated, false otherwise
};

// Creating a /delete/id SPECIFIC investments
const deleteInvestment = async (user_id) => {
    const [result] = await pool.query(
        `
        DELETE FROM investments WHERE user_id = ?
        `, [user_id]
    );
    return result.affectedRows > 0; // Return true if an investment was deleted, false otherwise
};

// export to controller
export{addUser, getUser, getUsers, addInvest, editUser,getUsersByUsername, deleteUser, getInvestments, getInvestment, editInvestment, deleteInvestment}