import React, { useState } from "react";
import "./BankTransferInput.css"; // We'll create this CSS file

const BankTransferInput = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="bank-transfer-input">
      <div className="input-group">
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="input-field"
          placeholder=" "
        />
        <label className="input-label">Account Number</label>
      </div>

      <div className="input-group">
        <span className="currency-adornment">LKR</span>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field with-adornment"
          placeholder="Enter amount in LKR"
        />
      </div>
    </div>
  );
};

export default BankTransferInput;
