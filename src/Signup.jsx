import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSignup(e) {
    e.preventDefault();

    const newUser = {
      name: user.name.trim(),
      email: user.email.trim().toLowerCase(),
      password: user.password,
      phone: user.phone.trim(),
      address: user.address.trim(),
    };

    if (
      !newUser.name ||
      !newUser.email ||
      !newUser.password ||
      !newUser.phone ||
      !newUser.address
    ) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(newUser)
    );

    // Do not log the user in automatically after signup
    localStorage.removeItem("foodUser");

    alert("Signup successful! Please login.");

    navigate("/login", { replace: true });
  }

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <p>Create your Food Flow account</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={user.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={user.address}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Create Account</button>

        <p>
          Already registered?{" "}
          <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;