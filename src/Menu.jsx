import { Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [vegFilter, setVegFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("All");
  const [costFilter, setCostFilter] = useState("All");

  const restaurants = [
    {
      id: "pizza-palace",
      name: "Pizza Palace",
      image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
      offer: "50% OFF UPTO ₹120",
      rating: "4.8",
      time: "30-40 mins",
      food: "Pizza, Italian, Fast Food",
      place: "Tirunelveli",
      type: "Veg",
      cost: 300,
    },
    {
      id: "burger-house",
      name: "Burger House",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
      offer: "40% OFF UPTO ₹100",
      rating: "4.6",
      time: "25-35 mins",
      food: "Burgers, Fast Food, Beverages",
      place: "Palayamkottai",
      type: "Non Veg",
      cost: 250,
    },
    {
      id: "biryani-king",
      name: "Biryani King",
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
      offer: "ITEMS AT ₹99",
      rating: "4.9",
      time: "35-45 mins",
      food: "Biryani, Indian, Chicken",
      place: "Tirunelveli",
      type: "Non Veg",
      cost: 400,
    },
    {
      id: "south-spice",
      name: "South Spice",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      offer: "60% OFF UPTO ₹120",
      rating: "4.7",
      time: "20-30 mins",
      food: "South Indian, Dosa, Idli",
      place: "Vannarpettai",
      type: "Veg",
      cost: 200,
    },
    {
      id: "green-bowl",
      name: "Green Bowl",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      offer: "FREE DELIVERY",
      rating: "4.8",
      time: "20-30 mins",
      food: "Healthy, Vegan, Salads",
      place: "Tirunelveli",
      type: "Veg",
      cost: 350,
    },
    {
      id: "sushi-combo",
      name: "Sushi Combo",
      image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
      offer: "45% OFF",
      rating: "4.7",
      time: "35-45 mins",
      food: "Sushi, Japanese, Asian",
      place: "Palayamkottai",
      type: "Non Veg",
      cost: 600,
    },
    {
      id: "icecream-world",
      name: "Icecream World",
      image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
      offer: "ITEMS AT ₹79",
      rating: "4.6",
      time: "20-30 mins",
      food: "Ice Cream, Desserts, Shakes",
      place: "Tirunelveli",
      type: "Veg",
      cost: 250,
    },
    {
      id: "cakes-and-bakes",
      name: "Cakes & Bakes",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      offer: "40% OFF",
      rating: "4.8",
      time: "25-35 mins",
      food: "Cakes, Bakery, Desserts",
      place: "Tirunelveli",
      type: "Veg",
      cost: 300,
    },
  ];

  const filteredRestaurants = restaurants.filter((hotel) => {
    const vegMatch = vegFilter === "All" || hotel.type === vegFilter;
    const ratingMatch =
      ratingFilter === "All" || Number(hotel.rating) >= Number(ratingFilter);
    const timeMatch =
      timeFilter === "All" || parseInt(hotel.time) <= Number(timeFilter);
    const costMatch =
      costFilter === "All" || hotel.cost <= Number(costFilter);

    return vegMatch && ratingMatch && timeMatch && costMatch;
  });

  function resetFilters() {
    setVegFilter("All");
    setRatingFilter("All");
    setTimeFilter("All");
    setCostFilter("All");
  }

  return (
    <div className="menu-page">
      <h1>Restaurants to explore</h1>
      <p>Order food online from top restaurants near you.</p>

      <div className="filter-row">
        <button onClick={resetFilters}>All</button>
        <button onClick={() => setVegFilter("Veg")}>Veg</button>
        <button onClick={() => setVegFilter("Non Veg")}>Non-Veg</button>
        <button onClick={() => setRatingFilter("4.7")}>Ratings 4.7+</button>
        <button onClick={() => setTimeFilter("30")}>Under 30 mins</button>
        <button onClick={() => setCostFilter("300")}>Cost Under ₹300</button>
      </div>

      <div className="hotel-grid">
        {filteredRestaurants.map((hotel) => (
          <Link
            to={`/restaurant/${hotel.id}`}
            className="hotel-card"
            key={hotel.id}
          >
            <div className="hotel-img-box">
              <img src={hotel.image} alt={hotel.name} />
              <div className="offer-text">{hotel.offer}</div>
            </div>

            <div className="hotel-info">
              <h2>{hotel.name}</h2>

              <div className="rating-row">
                <span className="rating">★ {hotel.rating}</span>
                <span>•</span>
                <span>{hotel.time}</span>
              </div>

              <p>{hotel.food}</p>
              <h4>{hotel.place}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;