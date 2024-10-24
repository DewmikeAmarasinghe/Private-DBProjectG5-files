import express from 'express';
import db from '../../models/db.mjs';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, currentPassword, newPassword } = req.body;

  if (!username || !currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Username, current password, and new password are required' });
  }

  try {
    const [rows] = await db.execute('SELECT * FROM User WHERE username = ?', [username]);
    console.log("Query executed successfully");

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];

    if (!user.password_hash) {
      console.error('Stored password is null or undefined');
      return res.status(500).json({ message: 'Server error: Invalid stored password' });
    }

    try {
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password_hash);

      if (!isCurrentPasswordValid) {
        return res.status(401).json({ message: 'Current password is incorrect' });
      }

      // Hash the new password
      const saltRounds = 10;
      const newPasswordHash = await bcrypt.hash(newPassword, saltRounds);

      // Update the password in the database
      await db.execute('UPDATE User SET password_hash = ? WHERE id = ?', [newPasswordHash, user.id]);

      res.status(200).json({ message: 'Password changed successfully' });
    } catch (bcryptError) {
      console.error('bcrypt error:', bcryptError);
      res.status(500).json({ message: 'Server error: Password processing failed' });
    }
  } catch (error) {
    console.error('Database or server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Export router as a named export
export { router as changePassword };