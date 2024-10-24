import React from "react";
import { Link } from "@mui/material";

const ForgotPassword = () => {
  return (
    <Link
      href="/forgot-password" // Replace with the actual path for your forgot password page
      className="font-sora text-[12px] font-semibold text-blue-a200"
    >
      Forgot Password?
    </Link>
  );
};

export default ForgotPassword;
