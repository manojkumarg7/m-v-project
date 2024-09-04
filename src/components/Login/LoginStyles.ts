import { styled } from "@mui/material/styles";

const LoginStyles = styled("div")(({}) => ({
  maxWidth: "100%",
  height: "100vh",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",

  ".textfiled-heading": {
    fontSize: "14px",
    marginBlock: "10px",
  },

  ".forgot-password": {
    color: "red",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "8px",
  },
}));
export default LoginStyles;
