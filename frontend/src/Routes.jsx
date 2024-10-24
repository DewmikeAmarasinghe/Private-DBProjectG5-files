import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import LoginScreen from "./pages/LoginScreen";
import UserHomeScreen from "./pages/UserHomeScreen";
import UserTransaction from "./pages/UserTransaction";
import UserHistory from "./pages/UserHistory";
import UserAccount from "./pages/UserAccount";
import BankTransfer from "./pages/BankTransfer";
import CashDeposit from "./pages/CashDeposit";
import CashWithdraw from "./pages/CashWithdraw";
import FixedDeposit from "./pages/FixedDeposit";
     


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "loginscreen",
      element: <LoginScreen />,
    },
    {
      path: "userhomescreen",
      element: <UserHomeScreen />,
    },
    {
      path: "usertransaction",
      element: <UserTransaction />,
    },
    {
      path: "userhistory",
      element: <UserHistory />,
    },
    {
      path: "useraccount",
      element: <UserAccount />,
    },
    {
      path: "banktransfer",
      element: <BankTransfer />,
    },
    {
      path: "cashdeposit",
      element: <CashDeposit />,
    },
    {
      path: "cashwithdraw",
      element: <CashWithdraw />,
    },
    {
      path: "fixeddeposit",
      element: <FixedDeposit />,
    },
  ]);

  return element;
};

export default ProjectRoutes;