import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreenPage from "./pages/LoginScreen/index.jsx";
import UserHomeScreen from "./pages/UserHomeScreen/index.jsx";
import UserTransaction from "./pages/UserTransaction/index.jsx";
import UserHistory from "./pages/UserHistory/index.jsx";
import UserProfile from "./pages/UserProfile/index.jsx";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import ChangePassword from "./pages/ChangePassword/index.jsx";
import SettingsPage from "./pages/UserSetting/index.jsx";
import NotFound from "./pages/NotFound.jsx";
import BankTransferPage from "./pages/BankTransfer/index.jsx";
import CashDepositPage from "./pages/CashDeposit/index.jsx";
import CashWithdrawPage from "./pages/CashWithdraw";
import FixedDepositPage from "./pages/FixedDeposit/index.jsx"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userhistory" element={<UserHistory />} />
        <Route path="/userhomescreen" element={<UserHomeScreen />} />
        <Route path="/loginscreen" element={<LoginScreenPage />} />
        <Route path="/usertransaction" element={<UserTransaction />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/banktransfer" element={<BankTransferPage />} />
        <Route path="/cashdeposit" element={<CashDepositPage />} />
        <Route path="/cashwithdraw" element={<CashWithdrawPage />} />
        <Route path="/fixeddeposit" element={<FixedDepositPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
