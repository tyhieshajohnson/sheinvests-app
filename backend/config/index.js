import mysql from "mysql2";
import { config } from "dotenv";

config()

let pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_Name,
    password: process.env.DB_UserPassword
})

export{
    pool
}