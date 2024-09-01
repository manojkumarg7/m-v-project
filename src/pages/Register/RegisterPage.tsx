import RegisterStyles from "./RegisterStyle";
import { Typography, TextField, Button, Box } from "@mui/material";
import { assets } from "../../assets/assets";
import "../../styles/global.css";
const RegisterPage: React.FC = () => {
  return (
    <RegisterStyles>
      <Typography className="headline">Create an account</Typography>
      <TextField
        className="global-textfield"
        id="outlined-search"
        label="Enter Your Username "
        type="search"
      />
      <TextField
        className="global-textfield"
        id="outlined-search"
        label="Enter Your Email "
        type="search"
      />
      <TextField
        className="global-textfield"
        id="outlined-search"
        label="Enter Your Phone Number"
        type="search"
      />
      <TextField
        className="global-textfield"
        id="outlined-search"
        label="Enter Your Password"
        type="search"
      />
      <Button className="btn global-btn" variant="contained">
        SignUP
      </Button>

      <Box className="lines-wrapper">
        <Box className="horizontal-lines"></Box>
        <Typography className="or">or With</Typography>
        <Box className="horizontal-lines"></Box>
      </Box>
      <Button className="btn global-btn btn-style" variant="text">
        <img src={assets.googleicon} alt="" className="google-logo" />
        SignUp with Google
      </Button>

      <Typography className="footer-info-line">
        Already have an account? <span className="navigate-link">Login</span>{" "}
      </Typography>
    </RegisterStyles>
  );
};

export default RegisterPage;
