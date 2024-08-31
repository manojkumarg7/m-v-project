import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoginStyles from "./LoginStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { assets } from "../../assets/assets";
const LoginPage = () => {
  return (
    <LoginStyles>
      <Box className="login-wrapper">
        <Typography className="head-line">Hi, Welcome Back! 👋</Typography>
        <Typography className="input-name" variant="subtitle2">
          Email
        </Typography>
        <TextField
          className="text-input"
          id="outlined-search"
          label="Enter Email"
          type="search"
        />
        <Typography variant="subtitle2" className="input-name">
          Password
        </Typography>
        <TextField
          className="text-input"
          id="outlined-search"
          label="Enter Password"
          type="search"
        />
        <Box
          className=""
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBlock: "20px",
          }}
        >
          <Typography>Remember Me</Typography>
          <Typography sx={{ color: "red", cursor: "pointer" }}>
            Forgot Password?
          </Typography>
        </Box>
        <Button className="btn" variant="contained">
          Login
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBlock: "40px",
          }}
        >
          <Box className="line"></Box>
          <Typography sx={{ fontSize: "18px" }}>or With</Typography>
          <Box className="line"></Box>
        </Box>

        <Button
          className="btn"
          variant="text"
          sx={{
            border: "2px solid gray",
            borderRadius: "10px",
            color: "#000000",
          }}
        >
          <img src={assets.googleicon} alt="" className="logo" />
          Login with Google
        </Button>

        <Typography sx={{ textAlign: "center", marginBlock: "10px" }}>
          Don’t have an account ?{" "}
          <span
            style={{ color: "#160062", fontWeight: "bold", cursor: "pointer" }}
          >
            Sign Up
          </span>{" "}
        </Typography>
      </Box>
    </LoginStyles>
  );
};

export default LoginPage;
