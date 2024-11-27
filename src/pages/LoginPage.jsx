import { useState } from "react";
import "../css/LoginPage.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <div className="loginPage">
        <h2>Login to your account</h2>
        <form className="login-form">
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
        </form>
      </div>
    </>
  );
}
