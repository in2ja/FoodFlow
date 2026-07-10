import { Link } from "react-router-dom";
import "./Footer.css";
function subscribe() {
  alert("🎉 Thank you for subscribing to Food Flow!");
}

function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer-container">

        {/* Logo */}
        <div className="footer-box">
          <h2>
            🍴 Food <span>Flow</span>
          </h2>

          <p>
            Delicious food delivered fast to your doorstep.
            Your favourite restaurants, fresh meals,
            and hassle-free ordering all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/menu">Menu</Link>

          <Link to="/offers">Offers</Link>

          <Link to="/orders">Orders</Link>
        </div>

        {/* Company */}
        <div className="footer-box">
          <h3>Company</h3>

          <Link to="/about">About Us</Link>

          <Link to="/contact">Contact Us</Link>

          <Link to="/careers">Careers</Link>

          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* Support */}
        <div className="footer-box">
          <h3>Support</h3>

         <Link className="footer-link" to="/help">
  Help Center
</Link>

          <Link to="/terms">Terms & Conditions</Link>

          <Link to="/refund">Refund Policy</Link>

          <Link to="/faq">FAQs</Link>
        </div>

        {/* Newsletter */}
        <div className="footer-box">
          <h3>Newsletter</h3>

          <p>
            Subscribe to receive offers and updates.
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
            />

         <button onClick={subscribe}>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="main-copyright">
        © 2026 Food Flow. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;