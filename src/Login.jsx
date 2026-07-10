import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!savedUser) {
      alert("Please signup first");
      navigate("/signup");
      return;
    }

    const emailMatches =
      email.trim().toLowerCase() ===
      savedUser.email?.trim().toLowerCase();

    const passwordMatches =
      password === savedUser.password;

    if (!emailMatches || !passwordMatches) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "foodUser",
      JSON.stringify(savedUser)
    );

    alert("Login successful!");

    navigate("/menu", { replace: true });
  }

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <p>Welcome back to Food Flow</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          New user?{" "}
          <Link to="/signup">Signup here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;