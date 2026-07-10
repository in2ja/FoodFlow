import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const heroImages = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200",
    "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200",
    "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=1200",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "🍕 Pizza", path: "/restaurant/pizza-palace" },
    { name: "🍔 Burger", path: "/restaurant/burger-house" },
    { name: "🍛 Biryani", path: "/restaurant/biryani-king" },
    { name: "🥘 South Indian", path: "/restaurant/south-spice" },
    { name: "🥗 Healthy", path: "/restaurant/green-bowl" },
  ];

  const restaurants = [
    {
      path: "/restaurant/pizza-palace",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
      logo: "🍕",
      offer: "50% OFF",
      name: "Pizza Palace",
      food: "Pizza, Italian, Fast Food",
      rating: "4.8",
      reviews: "1.2K+",
      time: "30-40 min",
      delivery: "₹40 Delivery",
    },
    {
      path: "/restaurant/burger-house",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
      logo: "🍔",
      offer: "40% OFF",
      name: "Burger House",
      food: "Burgers, Fast Food, Beverages",
      rating: "4.6",
      reviews: "980+",
      time: "25-35 min",
      delivery: "₹35 Delivery",
    },
    {
      path: "/restaurant/biryani-king",
  image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
      logo: "🍛",
      offer: "30% OFF",
      name: "Biryani King",
      food: "Biryani, Indian, Chicken",
      rating: "4.9",
      reviews: "860+",
      time: "35-45 min",
      delivery: "₹50 Delivery",
    },
    {
      path: "/restaurant/south-spice",
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=900",
      logo: "🥘",
      offer: "25% OFF",
      name: "South Spice",
      food: "South Indian, Dosa, Idli",
      rating: "4.7",
      reviews: "760+",
      time: "20-30 min",
      delivery: "₹30 Delivery",
    },
    {
      path: "/restaurant/green-bowl",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900",
      logo: "🥗",
      offer: "35% OFF",
      name: "Green Bowl",
      food: "Healthy, Vegan, Salads",
      rating: "4.8",
      reviews: "720+",
      time: "20-30 min",
      delivery: "₹30 Delivery",
    },
    {
      path: "/restaurant/sushi-combo",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900",
      logo: "🍣",
      offer: "45% OFF",
      name: "Sushi Combo",
      food: "Sushi, Japanese, Asian",
      rating: "4.7",
      reviews: "860+",
      time: "35-45 min",
      delivery: "₹45 Delivery",
    },
    {
      path: "/restaurant/icecream-world",
      image:
        "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=900",
      logo: "🍦",
      offer: "30% OFF",
      name: "Icecream World",
      food: "Ice Cream, Desserts, Shakes",
      rating: "4.6",
      reviews: "650+",
      time: "20-30 min",
      delivery: "₹25 Delivery",
    },
    {
      path: "/restaurant/cakes-and-bakes",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
      logo: "🎂",
      offer: "40% OFF",
      name: "Cakes & Bakes",
      food: "Cakes, Bakery, Desserts",
      rating: "4.8",
      reviews: "900+",
      time: "25-35 min",
      delivery: "₹35 Delivery",
    },
  ];
    return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Delicious Food,
            <br />
            Delivered <span>Fast</span>
          </h1>

          <p>
            Order your favorite meals from the best restaurants near you.
          </p>

          <div className="hero-btns">

            <Link to="/login" className="order-btn">
              Order Now →
            </Link>

            <Link to="/menu" className="explore-btn">
              Explore Restaurants
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImages[currentImage]}
            alt="Food"
          />

        </div>

      </section>

      {/* Categories */}

      <h2 className="section-title">
        Explore Categories
      </h2>

      <div className="categories">

        {categories.map((item, index) => (

          <Link
            to={item.path}
            className="category"
            key={index}
          >
            {item.name}
          </Link>

        ))}

      </div>

      {/* Popular Restaurants */}

      <div className="restaurant-heading">

        <h2 className="section-title">
          Popular Restaurants
        </h2>

        <Link to="/menu">
          View All
        </Link>

      </div>

      <div className="restaurant-grid">

        {restaurants.map((restaurant, index) => (

          <Link
            to={restaurant.path}
            className="restaurant-card"
            key={index}
          >

            <div className="offer-badge">
              {restaurant.offer}
              <small>FIRST ORDER</small>
            </div>

            <button
              className="heart-btn"
              type="button"
            >
              ♡
            </button>

            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-img"
            />

            <div className="restaurant-details">

              <div className="restaurant-logo">
                {restaurant.logo}
              </div>

              <div className="restaurant-text">

                <div className="name-row">

                  <h3>
                    {restaurant.name}
                  </h3>

                  <span>
                    ⭐ {restaurant.rating} ({restaurant.reviews})
                  </span>

                </div>

                <p>
                  {restaurant.food}
                </p>

                <div className="meta-row">

                  <span>
                    {restaurant.time}
                  </span>

                  <span>•</span>

                  <span className="green">
                    {restaurant.delivery}
                  </span>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* Features */}

      <div className="features">

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>
            Get your food delivered hot and fresh.
          </p>
        </div>

        <div className="feature-card">
          <h3>👨‍🍳 Best Quality</h3>
          <p>
            Prepared with the finest ingredients.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Safe & Secure</h3>
          <p>
            100% safe payments and secure checkout.
          </p>
        </div>

        <div className="feature-card">
          <h3>📞 24/7 Support</h3>
          <p>
            We're here to help you anytime.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;