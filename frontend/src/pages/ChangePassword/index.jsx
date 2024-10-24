import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Container,
} from "@mui/material";
import {
  AccountCircle,
  Key,
  Lock,
  CheckCircleOutline,
} from "@mui/icons-material";

const ChangePassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    currentpassword: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const steps = ["Account Details", "Password Setup", "Confirmation"];

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    const newErrors = {};
    switch (activeStep) {
      case 0:
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.currentpassword)
          newErrors.currentpassword = "Current Password is required";
        else if (!/\S+@\S+\.\S+/.test(formData.currentpassword))
          newErrors.currentpassword = "Current Password is invalid";
        break;
      case 1:
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 8)
          newErrors.password = "Password must be at least 8 characters";
        if (formData.password !== formData.confirmPassword)
          newErrors.confirmPassword = "Passwords do not match";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateStep()) {
      // Here you would typically send the formData to your backend
      console.log("Form submitted:", formData);
      // Navigate to success page or login page
      navigate("/loginscreen");
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              InputProps={{
                startAdornment: (
                  <AccountCircle className="text-blue-500 mr-2" />
                ),
              }}
              style={{ marginBottom: "24px" }}
            />
            <TextField
              fullWidth
              label="Current Password"
              name="currentpassword"
              type="password"
              value={formData.currentpassword}
              onChange={handleChange}
              error={!!errors.currentpassword}
              helperText={errors.currentpassword}
              InputProps={{
                startAdornment: <Key className="text-blue-500 mr-2" />,
              }}
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              label=" New Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: <Lock className="text-blue-500 mr-2" />,
              }}
              style={{ marginBottom: "24px" }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                startAdornment: <Lock className="text-blue-500 mr-2" />,
              }}
            />
          </>
        );
      case 2:
        return (
          <div className="text-center">
            <CheckCircleOutline className="text-green-500 text-6xl mb-4" />
            <Typography variant="h6" className="mb-4">
              Great! You're all set to change password.
            </Typography>
            <Typography variant="body1">
              Please review your information before submitting.
            </Typography>
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  console.log("Current step:", activeStep);

  return (
    <>
      <Helmet>
        <title>Register for Your DBS Bank Account</title>
      </Helmet>
      <div className="w-full min-h-screen bg-white flex items-center justify-center p-4">
        <Container
          maxWidth="sm"
          className="bg-gradient-to-br from-blue-100 to-cyan-10 rounded-lg shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <img
              src="../images/img_50_money_hand_1.png"
              alt="DBS Bank"
              className="h-16 mx-auto mb-4"
            />
            <Typography variant="h4" className="font-bold text-gray-800">
              Change Password
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              Start your financial journey with us
            </Typography>
          </div>

          <Stepper activeStep={activeStep} alternativeLabel className="mb-8">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form>
            {getStepContent(activeStep)}
            <div className="mt-8 flex justify-between">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="text-blue-500"
              >
                Back
              </Button>
              <div>
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Change Now
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </form>

          <Typography
            variant="body2"
            className="text-center mt-6 text-gray-600"
          >
            DBS Bank PLC{" "}
            <Link to="/loginscreen" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default ChangePassword;
