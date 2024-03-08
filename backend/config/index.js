import mysql from 'mysql2';

import { config } from "dotenv";
config();

let pool = mysql.createPool({
    HOST: process.env.HOST,
    DATABASE: process.env.DATABASE,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD
}).promise();

export{
    pool
}