import mysql from 'mysql2';
import { config } from "dotenv";
config();

const pool = mysql.createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}).promise();

export{
    pool
}
export const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/';