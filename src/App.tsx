import "./App.css";
import Navbar from "./components/Header/Navbar";
import LoginPage from "./pages/Login/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
