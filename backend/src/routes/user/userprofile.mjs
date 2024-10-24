import express from 'express';
import db from '../../models/db.mjs'; 

const router = express.Router();

// Route to fetch account balances for a user
router.get('/account/balance/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    // Query to get the balances for the user
    const [rows] = await db.query(`
      SELECT account_number, balance, type 
      FROM Account 
      WHERE account_holder = ?`, [userId]);
    
    // Respond with account balances
    res.json(rows);
  } catch (error) {
    console.error('Error fetching account balances:', error);
    res.status(500).json({ error: 'Error fetching account balances' });
  }
});

// Route to handle quick transfers between two accounts
router.post('/account/transfer', async (req, res) => {
  const { fromAccount, toAccount, amount } = req.body;

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // Deduct the amount from the sender's account
    const [fromResult] = await connection.query(`
      UPDATE Account 
      SET balance = balance - ? 
      WHERE account_number = ?`, [amount, fromAccount]);

    if (fromResult.affectedRows === 0) {
      throw new Error('Sender account not found or insufficient balance');
    }

    // Add the amount to the recipient's account
    const [toResult] = await connection.query(`
      UPDATE Account 
      SET balance = balance + ? 
      WHERE account_number = ?`, [amount, toAccount]);

    if (toResult.affectedRows === 0) {
      throw new Error('Recipient account not found');
    }

    // Log the transaction for both accounts
    await connection.query(`
      INSERT INTO Transaction (transaction_id, account, type, via, amount, time)
      VALUES (UUID(), ?, 'Transfer', 'Online', ?, NOW())`, [fromAccount, amount]);

    await connection.query(`
      INSERT INTO Transaction (transaction_id, account, type, via, amount, time)
      VALUES (UUID(), ?, 'Transfer', 'Online', ?, NOW())`, [toAccount, amount]);

    await connection.commit();
    res.json({ message: 'Transfer successful' });
  } catch (error) {
    await connection.rollback();
    console.error('Transfer failed:', error);
    res.status(500).json({ error: 'Transfer failed' });
  } finally {
    connection.release();
  }
});

// Route to handle loan requests
router.post('/loan/request', async (req, res) => {
  const { customerId, amount, duration, rate, type } = req.body;
  try {
    // Insert loan request into the Loan table
    await db.query(`
      INSERT INTO Loan (loan_id, customer_id, amount, duration, rate, type, starting_date, applied_through, applied_by, status)
      VALUES (UUID(), ?, ?, ?, ?, ?, NOW(), 'Online', ?, 'Pending')`, 
      [customerId, amount, duration, rate, type, customerId]);

    res.json({ message: 'Loan request submitted successfully' });
  } catch (error) {
    console.error('Error submitting loan request:', error);
    res.status(500).json({ error: 'Loan request submission failed' });
  }
});

export {router as UserProfile};



