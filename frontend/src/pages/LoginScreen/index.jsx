import { Helmet } from "react-helmet";
import { Img, Button, Input, Heading } from "../../components";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function LoginScreenPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    console.log("handleLogin");
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        // Redirect to UserHomeScreen on successful login
        navigate("/userprofile");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login to Your DBS Bank Account</title>
      </Helmet>
      <div className="w-full h-screen bg-white-A700 flex">
        <div className="flex w-1/2 justify-center items-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center mb-8">
              <Img
                src="images/img_50_money_hand_1.png"
                alt="Logo"
                className="h-[90px] w-[90px] object-contain"
              />
              <Heading
                size="headingxl"
                as="h1"
                className="font-sora text-[32px] font-bold text-black-900_01"
              >
                DBS Bank
              </Heading>
            </div>
            <form onSubmit={handleLogin}>
              <div className="w-full">
                <div className="flex flex-col gap-2 mb-6">
                  <Heading
                    as="h2"
                    className="font-sora text-[16px] font-normal text-black-900_01"
                  >
                    Username
                  </Heading>
                  <Input
                    color="black_900_7f"
                    size="sm"
                    variant="outline"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="rounded-[10px] !border px-4 font-sora"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h3"
                      className="font-sora text-[16px] font-normal text-black-900_01"
                    >
                      Password
                    </Heading>
                    <Link
                      to="/forgot-password"
                      className="font-sora text-[14px] text-blue-500 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    color="black_900_7f"
                    size="sm"
                    variant="outline"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="rounded-[10px] !border px-4 font-sora"
                  />
                </div>
                <Button
                  size="sm"
                  variant="gradient"
                  color="blue_A200_cyan_A700"
                  className="mt-8 w-full rounded-[10px] px-5 font-sora"
                  type="submit"
                >
                  Log In
                </Button>
                <div className="mt-4 text-center">
                  <p className="font-sora text-[16px]">
                    Establish a New Password for Safety{" "}
                    <Link
                      to="/changepassword"
                      className="text-blue-500 hover:underline"
                    >
                      Change Password
                    </Link>
                  </p>
                </div>
              </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/img_chris_lee_701lt.png')` }}
        >
          <div className="h-full w-full rounded-bl-[44px] rounded-tl-[44px]"></div>
        </div>
      </div>
    </>
  );
}
