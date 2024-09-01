import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoginStyles from "./LoginStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { assets } from "../../assets/assets";
import Checkbox from "@mui/material/Checkbox";
import "../../styles/global.css";
const LoginPage: React.FC = () => {
  return (
    <LoginStyles>
      <Box className="login-wrapper">
        <Typography className="headline">Hi, Welcome Back! 👋</Typography>
        <Typography className="textfiled-heading" variant="subtitle2">
          Email
        </Typography>
        <TextField
          className="global-textfield"
          id="outlined-search"
          label="Enter Email"
          type="search"
        />
        <Typography variant="subtitle2" className="textfiled-heading">
          Password
        </Typography>
        <TextField
          className="global-textfield"
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
          <Typography>
            <Checkbox />
            Remember Me
          </Typography>
          <Typography className="forgot-password">Forgot Password?</Typography>
        </Box>
        <Button className="btn global-btn" variant="contained">
          Login
        </Button>

        <Box className="lines-wrapper">
          <Box className="horizontal-lines"></Box>
          <Typography className="or">or With</Typography>
          <Box className="horizontal-lines"></Box>
        </Box>

        <Button className="btn  global-btn btn-style" variant="text">
          <img src={assets.googleicon} alt="" className="google-logo" />
          Login with Google
        </Button>

        <Typography className="footer-info-line">
          Don’t have an account? <span className="navigate-link">Sign Up</span>{" "}
        </Typography>
      </Box>
    </LoginStyles>
  );
};

export default LoginPage;
