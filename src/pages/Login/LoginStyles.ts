import { styled } from "@mui/material/styles";

const LoginStyles = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  height: "100vh",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  ".head-line": {
    fontWeight: "bold",
    fontSize: "24px",
  },
  ".input-name": {
    fontSize: "14px",
    marginBlock: "5px",
  },
  ".text-input": {
    width: "312px",
    height: "48px",
    marginBlock: "5px",
    borderRadius: "10px",
  },

  ".btn": {
    width: "312px",
    height: "48px",
  },

  ".line": {
    width: "100%",
    backgroundColor: "red",
    color: "green",
    height: "2px",
  },

  ".logo": {
    width: "26px",
    height: "26px",
    marginRight: "20px",
  },
}));
export default LoginStyles;
