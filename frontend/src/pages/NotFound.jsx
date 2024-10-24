import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <Box
      className="flex flex-col items-center justify-center min-h-screen bg-[#87CEEB] p-5"
      style={{
        backgroundImage: 'url("/images/dessert.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box className="text-center max-w-2xl">
        <Typography variant="h1" className="text-white text-9xl font-bold mb-4">
          404
        </Typography>
        <Box
          className="bg-white rounded-lg p-4 mb-8 relative"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
          }}
        >
          <Typography variant="h5" className="text-gray-800">
            This is not the web page you are looking for.
          </Typography>
        </Box>
        <Box className="relative">
          <img
            src="/images/coins.png"
            alt="Cute character"
            className="w-48 h-48 mx-auto"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="mt-8 rounded-full px-8 py-3 font-bold bg-blue-600 hover:bg-blue-700"
          onClick={goToHomePage}
        >
          Return to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
