import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';
import { config } from 'dotenv';
import path from 'path'; // Import path module
import { pool } from './config/index.js';

config();
const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static('static')); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html')); // Use __dirname to resolve file paths
});

app.get('/user/:id', async (req, res) => {
});

app.use('/', routes);
app.use('/add', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});