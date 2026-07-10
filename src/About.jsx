import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero-section">
        <div className="about-hero-text">
          <h1>About Food Flow</h1>
          <p>
            Fresh food, fast delivery, trusted restaurants, and a smooth ordering
            experience made for food lovers.
          </p>

          <Link to="/menu" className="about-btn">
            Explore Menu
          </Link>
        </div>

        <img
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
          alt="Food Delivery"
          className="about-hero-img"
        />
      </section>

      <section className="about-story">
        <div>
          <h2>Who We Are</h2>
          <p>
            Food Flow is an online food delivery platform that connects customers
            with their favourite restaurants. We make ordering food simple,
            quick, safe, and enjoyable.
          </p>
          <p>
            From live order tracking to secure checkout and fast delivery, Food
            Flow brings delicious meals to your doorstep with care.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          alt="Restaurant"
        />
      </section>

      <section className="stats">
        <div>
          <h2>10K+</h2>
          <p>Orders Delivered</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Restaurants</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Delivery Partners</p>
        </div>

        <div>
          <h2>98%</h2>
          <p>Happy Customers</p>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Food Flow?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>⚡ Fast Delivery</h3>
            <p>Hot and fresh food delivered quickly to your doorstep.</p>
          </div>

          <div className="why-card">
            <h3>📍 Live Tracking</h3>
            <p>Track your order status and delivery location in real time.</p>
          </div>

          <div className="why-card">
            <h3>💳 Secure Payment</h3>
            <p>Safe checkout with cash on delivery and online payment options.</p>
          </div>

          <div className="why-card">
            <h3>🍴 Best Restaurants</h3>
            <p>Choose from top-rated local restaurants and popular dishes.</p>
          </div>

          <div className="why-card">
            <h3>🎁 Great Offers</h3>
            <p>Enjoy discounts, coupons, free delivery, and special deals.</p>
          </div>

          <div className="why-card">
            <h3>☎️ 24/7 Support</h3>
            <p>Friendly customer support whenever you need help.</p>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2>What Our Customers Say</h2>

        <div className="review-grid">
          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>"The delivery was super fast and the food arrived hot."</p>
            <b>Rahul K.</b>
          </div>

          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>"Beautiful website and very easy to order food."</p>
            <b>Priya S.</b>
          </div>

          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>"Best food delivery experience in Tirunelveli."</p>
            <b>Arun M.</b>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Hungry?</h2>
        <p>Explore delicious dishes from your favourite restaurants.</p>
        <Link to="/menu">Order Now</Link>
      </section>
    </div>
  );
}

export default About;