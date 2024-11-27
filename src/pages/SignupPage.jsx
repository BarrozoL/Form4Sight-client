import { useState } from "react";
import "../css/LoginPage.css";
import axios from "axios";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const signupUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          email,
          password,
        }
      );
      setEmail("");
      setPassword("");
      console.log("User signed up succesfully");
      alert;
      ("Signup successful!");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signupUser();
  };

  return (
    <>
      <div className="loginPage">
        <h2>Sign up to Form4Sight</h2>
        <form className="login-form">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" onClick={handleSignupSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
