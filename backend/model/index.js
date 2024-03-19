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
  };  

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
        INSERT INTO investments (user_id, crypto_name, amount) VALUES (?,?,?)
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


// CRYPTO
// 1. Creating a /add 'crypto' class
const addCrypto = async (crypto_name, crypto_description) => {
    await pool.query(
        `
        INSERT INTO crypto (crypto_name, crypto_description) VALUES (?, ?)
        `,
        [crypto_name, crypto_description]
        );
};

// 2. Creating a /get for ALL 'crypto' class
const getAllCrypto = async (req, res) => {
    const [crypto] = await pool.query(
        `
        
        SELECT * FROM crypto`
    );
    return crypto
};

// 3. Creating a /get/crypto/:id SPECIFIC crypto for a user
const getCrypto = async (user_id) => {
    const [crypto] = await pool.query(
        `
        SELECT 
	user_id,
    crypto_name,
    SUM(amount) AS total_amount_invested
FROM 
    investments
GROUP BY 
    crypto_name;
        `,
        [user_id]
    );
    return crypto;
};

// 4. Creating a /post crypto for crypto
const editCrypto = async (user_id, crypto_name, crypto_description) => {
    try {
        console.log('Updating crypto:', user_id,crypto_name, crypto_description);

        const [crypto] = await pool.query(
            `
            UPDATE crypto SET
            crypto_name = ?,
            crypto_description = ? WHERE user_id = ?
            `,
            [crypto_name, crypto_description, user_id] // Added user_id here
        );
        console.log('Updated crypto:', user_id, crypto_name, crypto_description);
        return crypto;
    }
    catch(error) {
        console.log('Failed to update crypto:', error.message);
        throw error;
    }
};

// export to controller
export{addUser, 
    getUser, 
    getUsers, 
    addInvest, 
    editUser,
    getUsersByUsername, 
    deleteUser, 
    getInvestments, 
    getInvestment, 
    editInvestment, 
    deleteInvestment, 
    addCrypto,
    getAllCrypto,
    getCrypto,
    editCrypto,
}