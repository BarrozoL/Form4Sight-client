import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  return (
    <>
      <div className="loginPage">
        <h2>Sign up to Form4Sight</h2>
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
