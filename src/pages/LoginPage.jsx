import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/LoginPage.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful");
      alert("Login successful");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLoginSubmit = () => {
    loginUser();
  };

  return (
    <>
      <div className="loginPage">
        <h2>Login to your account</h2>
        <form className="login-form">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" onClick={handleLoginSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
