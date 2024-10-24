import express from 'express';
import db from '../../models/db.mjs'; 
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const [rows] = await db.execute('SELECT * FROM User WHERE username = ?', [username]);
    console.log("Query executed successfully");

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = rows[0];

    if (!user.password_hash) {
      console.error('Stored password is null or undefined');
      return res.status(500).json({ message: 'Server error: Invalid stored password' });
    }

    try {
      const isPasswordValid = await bcrypt.compare(password, user.password_hash);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      res.status(200).json({ message: 'Login successful', userId: user.id });
    } catch (bcryptError) {
      console.error('bcrypt compare error:', bcryptError);
      res.status(500).json({ message: 'Server error: Password comparison failed' });
    }
  } catch (error) {
    console.error('Database or server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Export router as a named export
export { router as loginUser };