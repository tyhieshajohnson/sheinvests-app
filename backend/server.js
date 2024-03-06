const express = require('express');
// const mysql = require('mysql2/promise');

const app = express();
const port = process.env.port;

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const [users] = await pool.execute('SELECT * FROM users');
    res.json({ result: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [result] = await pool.execute(
      'INSERT INTO users (username, email, passwords) VALUES (?, ?, ?)',
      [username, email, password]
    );

    res.json({ result: 'User successfully registered' });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
