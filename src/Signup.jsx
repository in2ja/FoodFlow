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

  const [confirmPassword, setConfirmPassword] =
    useState("");

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSignup(e) {
    e.preventDefault();

    if (user.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (user.password.length < 6) {
      alert(
        "Password must contain at least 6 characters"
      );
      return;
    }

    const formattedUser = {
      ...user,
      name: user.name.trim(),
      email: user.email.trim().toLowerCase(),
      phone: user.phone.trim(),
      address: user.address.trim(),
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(formattedUser)
    );

    alert("Signup successful! Please login.");

    navigate("/login");
  }

  return (
    <div className="auth-page">
      <form
        className="auth-box"
        onSubmit={handleSignup}
      >
        <h2>Signup</h2>

        <p>Create your Food Flow account</p>

        <input
          type="text"
          name="name"
          placeholder="Full name"
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
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={user.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Delivery address"
          value={user.address}
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
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Signup
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;