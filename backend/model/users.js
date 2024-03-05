// Importing the 'pool' object from the '../config/index.js' file.
import { pool as db } from "../config/index.js";

// Creating a 'users' class.
class users {
    // Method to fetch all users.
    fetchUsers(req, res) {
        // Implementation for fetching all users goes here.
        // Currently, this method is empty.
    }

    // Method to fetch a specific user based on the provided 'id' parameter.
    fetchUser(req, res) {
        // SQL query to select specific fields from the 'users' table where the 'id' matches the parameter.
        const qry = `
            SELECT 
                id,
                username,
                email,
                password
            FROM users
            WHERE id = ${req.params.id};
        `;
        
        // Executing the SQL query using the 'query' method of the 'db' object.
        db.query(qry, (err, result) => {
            // Handling any errors that may occur during the database query.
            if (err) throw err;

            // Sending a JSON response containing the HTTP status code and the query result.
            res.json({
                status: res.statusCode,
                result,
            });
        });
    }
}

// Exporting the 'users' class for use in other modules.
export default users;
