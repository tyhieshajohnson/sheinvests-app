import express from 'express';
import {config} from 'dotenv';
config();
import bcrypt from 'bcrypt';

//allows the use of specific routes wich makes use of the function from the controller
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use(express.static("views"));


// defining user routes
app.use('/',userRouter)

// defining user routes of our server
app.use('/add', userRouter)

const PORT = process.env.port;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
















// app.get('/users', async (req, res) => {
//   try {
//     const [users] = await pool.execute('SELECT * FROM users');
//     res.json({ result: users });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/users', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const [result] = await pool.execute(
//       'INSERT INTO users (username, email, passwords) VALUES (?, ?, ?)',
//       [username, email, password]
//     );

//     res.json({ result: 'User successfully registered' });
//   } catch (error) {
//     console.error('Error inserting user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
