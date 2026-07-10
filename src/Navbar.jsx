import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount = 0 }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("foodUser"));

  function logout() {
    localStorage.removeItem("foodUser");
    localStorage.removeItem("cart");
    localStorage.removeItem("coupon");

    navigate("/");
    window.location.reload();
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        🍴 Food <span>Flow</span>
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {user && <Link to="/orders">Orders</Link>}
      </div>

      {/* Right Side */}
      <div className="nav-right">
        {user ? (
          <>
            {/* Delivery Address */}
            <div className="location">
              <span>📍 Deliver to</span>

              <b>
                {user.address?.trim()
                  ? user.address
                  : "Please update address"}
              </b>
            </div>

            {/* Cart */}
            <Link to="/cart" className="cart">
              🛒
              <sup>{cartCount}</sup>
            </Link>

            {/* User Details */}
            <div className="user-info">
              <span className="username">
                Hi, {user.name || "User"}
              </span>

              <Link to="/profile" className="edit-profile">
                ✏ Edit Details
              </Link>
            </div>

            {/* Logout */}
            <button
              type="button"
              className="main-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Before Login */}
            <Link to="/login" className="outline-btn">
              Login
            </Link>

            <Link to="/signup" className="main-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;