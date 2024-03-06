// Importing the 'pool' object from the '../config/index.js' file.
import { pool } from "../config/index.js";

import { config } from "dotenv";
config();

// Creating a 'users' class.
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
 
// Exporting the 'users' class for use in other modules.
export { addUser };


   















// {
//     Method to fetch all users.
//     fetchUsers(req, res) {
//         Implementation for fetching all users goes here.
//         Currently, this method is empty.
//     }

//     Method to fetch a specific user based on the provided 'id' parameter.
//     fetchUser(req, res) {
//         SQL query to select specific fields from the 'users' table where the 'id' matches the parameter.
//         const qry = `
//             SELECT 
//                 id,
//                 username,
//                 email,
//                 password
//             FROM users
//             WHERE id = ${req.params.id};
//         `;
        
//         Executing the SQL query using the 'query' method of the 'db' object.
//         db.query(qry, (err, result) => {
            // Handling any errors that may occur during the database query.
//             if (err) throw err;

//             Sending a JSON response containing the HTTP status code and the query result.
//             res.json({
//                 status: res.statusCode,
//                 result,
//             });
//         });
//     }
// }
