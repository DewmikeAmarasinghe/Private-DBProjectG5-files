import express from 'express';
import cors from 'cors';
import { loginUser } from './routes/user/loginscreen.mjs'; // Import as a named export
import { UserProfile } from './routes/user/userprofile.mjs'; // Import as a named export
import { changePassword } from './routes/user/chnagepassword.mjs';
import dotenv from 'dotenv';
import 'dotenv/config';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

const PORT = process.env.PORT || 3000;

// Routes
app.use('/api/login', loginUser);
app.use('/api/user', UserProfile);
app.use('/api/changepassword', changePassword);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use.`);
  } else {
    console.error(err);
  }
});
