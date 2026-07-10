import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "./Restaurant.css";

function Restaurant({ addToCart }) {
  const { id } = useParams();

  const [foodFilter, setFoodFilter] = useState("All");

  const img = {
    pizza:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
    burger:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    biryani:
      "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
    dosa:
      "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
    salad:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    sushi:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    icecream:
      "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
    cake:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  };

  const restaurants = {
    "green-bowl": {
      name: "Green Bowl",
      image: img.salad,
      rating: "4.8",
      reviews: "720+",
      time: "20-30 mins",
      cost: "₹350 for two",
      cuisine: "Healthy, Vegan, Salads",
      place: "Tirunelveli",
      menu: [
        {
          id: 1,
          name: "Veg Salad Bowl",
          price: 199,
          veg: true,
          bestseller: true,
          desc: "Fresh vegetable salad bowl.",
          image: "/veg-salad-bowl.jpg",
        },
        {
          id: 2,
          name: "Paneer Protein Bowl",
          price: 249,
          veg: true,
          bestseller: true,
          desc: "Protein-rich paneer bowl.",
          image: "/paneer-protein-bowl.jpg",
        },
        {
          id: 3,
          name: "Quinoa Salad",
          price: 229,
          veg: true,
          desc: "Healthy quinoa salad.",
          image: "/quinoa-salad.jpg",
        },
        {
          id: 4,
          name: "Fruit Bowl",
          price: 179,
          veg: true,
          desc: "Fresh seasonal fruits.",
          image: "/fruit-bowl.jpg",
        },
        {
          id: 5,
          name: "Chicken Protein Bowl",
          price: 299,
          veg: false,
          bestseller: true,
          desc: "Grilled chicken healthy bowl.",
          image: "/chicken-protein-bowl.jpg",
        },
        {
          id: 6,
          name: "Egg Salad Bowl",
          price: 199,
          veg: false,
          desc: "Boiled egg salad bowl.",
          image: "/egg-salad.jpg",
        },
        {
          id: 7,
          name: "Avocado Toast",
          price: 199,
          veg: true,
          desc: "Creamy avocado toast.",
          image: "/avocado-toast.jpg",
        },
        {
          id: 8,
          name: "Orange Juice",
          price: 99,
          veg: true,
          desc: "Fresh orange juice.",
          image: "/orange-juice.jpg",
        },
      ],
    },

    "pizza-palace": {
      name: "Pizza Palace",
      image: img.pizza,
      rating: "4.8",
      reviews: "1.2K+",
      time: "30-40 mins",
      cost: "₹300 for two",
      cuisine: "Pizza, Italian, Fast Food",
      place: "Tirunelveli",
      menu: [
        {
          id: 9,
          name: "Margherita Pizza",
          price: 199,
          veg: true,
          bestseller: true,
          desc: "Classic cheese pizza.",
          image:
            "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
        },
        {
          id: 10,
          name: "Cheese Burst Pizza",
          price: 299,
          veg: true,
          bestseller: true,
          desc: "Loaded with extra cheese.",
          image:
            "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
        },
        {
          id: 11,
          name: "Farm House Pizza",
          price: 249,
          veg: true,
          desc: "Fresh veggie toppings.",
          image:
            "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg",
        },
        {
          id: 12,
          name: "Paneer Pizza",
          price: 279,
          veg: true,
          desc: "Spicy paneer toppings.",
          image:
            "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
        },
        {
          id: 13,
          name: "Chicken Pizza",
          price: 329,
          veg: false,
          bestseller: true,
          desc: "Juicy chicken toppings.",
          image:
            "https://images.pexels.com/photos/4109121/pexels-photo-4109121.jpeg",
        },
        {
          id: 14,
          name: "Pepperoni Pizza",
          price: 349,
          veg: false,
          desc: "Spicy pepperoni pizza.",
          image:
            "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
        },
        {
          id: 15,
          name: "Garlic Bread",
          price: 149,
          veg: true,
          desc: "Freshly baked garlic bread.",
          image:
            "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg",
        },
        {
          id: 16,
          name: "Pepsi",
          price: 60,
          veg: true,
          desc: "Chilled soft drink.",
          image:
            "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
        },
      ],
    },

    "burger-house": {
      name: "Burger House",
      image: img.burger,
      rating: "4.6",
      reviews: "980+",
      time: "25-35 mins",
      cost: "₹250 for two",
      cuisine: "Burgers, Fast Food, Beverages",
      place: "Palayamkottai",
      menu: [
        {
          id: 17,
          name: "Veg Burger",
          price: 129,
          veg: true,
          bestseller: true,
          desc: "Classic veg burger.",
          image:
            "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
        },
        {
          id: 18,
          name: "Cheese Burger",
          price: 159,
          veg: true,
          desc: "Loaded cheese burger.",
          image:
            "https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg",
        },
        {
          id: 19,
          name: "Paneer Burger",
          price: 189,
          veg: true,
          desc: "Paneer patty burger.",
          image:
            "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
        },
        {
          id: 20,
          name: "Chicken Burger",
          price: 219,
          veg: false,
          bestseller: true,
          desc: "Crispy chicken burger.",
          image:
            "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg",
        },
        {
          id: 21,
          name: "Double Chicken Burger",
          price: 269,
          veg: false,
          desc: "Double chicken patty.",
          image:
            "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
        },
        {
          id: 22,
          name: "French Fries",
          price: 99,
          veg: true,
          desc: "Golden crispy fries.",
          image:
            "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
        },
        {
          id: 23,
          name: "Peri Peri Fries",
          price: 119,
          veg: true,
          desc: "Spicy peri peri fries.",
          image:
            "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg",
        },
        {
          id: 24,
          name: "Cold Coffee",
          price: 119,
          veg: true,
          desc: "Creamy cold coffee.",
          image:
            "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
        },
      ],
    },

    "biryani-king": {
      name: "Biryani King",
      image: img.biryani,
      rating: "4.9",
      reviews: "860+",
      time: "35-45 mins",
      cost: "₹400 for two",
      cuisine: "Biryani, Indian, Chicken",
      place: "Tirunelveli",
      menu: [
        {
          id: 25,
          name: "Chicken Biryani",
          price: 240,
          veg: false,
          bestseller: true,
          desc: "Aromatic chicken biryani.",
          image: "/CB.jpg",
        },
        {
          id: 26,
          name: "Mutton Biryani",
          price: 340,
          veg: false,
          bestseller: true,
          desc: "Rich mutton biryani.",
          image: "/MB.jpg",
        },
        {
          id: 27,
          name: "Egg Biryani",
          price: 170,
          veg: false,
          desc: "Spicy egg biryani.",
          image: "/EGB.jpg",
        },
        {
          id: 28,
          name: "Veg Biryani",
          price: 160,
          veg: true,
          desc: "Loaded vegetable biryani.",
          image: "/VB.jpg",
        },
        {
          id: 29,
          name: "Paneer Biryani",
          price: 210,
          veg: true,
          desc: "Paneer dum biryani.",
          image: "/PB.jpg",
        },
        {
          id: 30,
          name: "Chicken 65",
          price: 210,
          veg: false,
          bestseller: true,
          desc: "Crispy spicy chicken.",
          image: "/C65.jpg",
        },
        {
          id: 31,
          name: "Raita",
          price: 40,
          veg: true,
          desc: "Fresh curd raita.",
          image: "/RAI.jpg",
        },
        {
          id: 32,
          name: "Lime Soda",
          price: 70,
          veg: true,
          desc: "Fresh lime soda.",
          image: "/LS.jpg",
        },
      ],
    },

    "south-spice": {
      name: "South Spice",
      image: img.dosa,
      rating: "4.7",
      reviews: "760+",
      time: "20-30 mins",
      cost: "₹200 for two",
      cuisine: "South Indian, Dosa, Idli",
      place: "Vannarpettai",
      menu: [
        {
          id: 33,
          name: "Masala Dosa",
          price: 120,
          veg: true,
          bestseller: true,
          desc: "Crispy dosa with masala.",
          image: "/MD.jpg",
        },
        {
          id: 34,
          name: "Plain Dosa",
          price: 90,
          veg: true,
          desc: "Classic crispy dosa.",
          image: "/PD.jpg",
        },
        {
          id: 35,
          name: "Idli Sambar",
          price: 80,
          veg: true,
          bestseller: true,
          desc: "Soft idli with sambar.",
          image: "/IDS.jpg",
        },
        {
          id: 36,
          name: "Medu Vada",
          price: 70,
          veg: true,
          desc: "Crispy vada.",
          image: "/MV.jpg",
        },
        {
          id: 37,
          name: "Poori Masala",
          price: 110,
          veg: true,
          desc: "Poori with potato masala.",
          image: "/POORI.jpg",
        },
        {
          id: 38,
          name: "Ghee Pongal",
          price: 120,
          veg: true,
          desc: "Hot ghee pongal.",
          image: "/PONGAL.jpg",
        },
        {
          id: 39,
          name: "Egg Dosa",
          price: 130,
          veg: false,
          desc: "Dosa with egg topping.",
          image: "/ED.jpg",
        },
        {
          id: 40,
          name: "Filter Coffee",
          price: 50,
          veg: true,
          desc: "South Indian coffee.",
          image: "/FC.jpg",
        },
      ],
    },

    "sushi-combo": {
      name: "Sushi Combo",
      image: img.sushi,
      rating: "4.7",
      reviews: "690+",
      time: "35-45 mins",
      cost: "₹600 for two",
      cuisine: "Sushi, Japanese, Asian",
      place: "Palayamkottai",
      menu: [
        {
          id: 41,
          name: "California Roll",
          price: 349,
          veg: false,
          bestseller: true,
          desc: "Classic sushi roll.",
          image: "/california-roll.jpg",
        },
        {
          id: 42,
          name: "Veg Sushi Roll",
          price: 249,
          veg: true,
          desc: "Vegetable sushi roll.",
          image: "/veg-sushi-roll.jpg",
        },
        {
          id: 43,
          name: "Salmon Sushi",
          price: 499,
          veg: false,
          bestseller: true,
          desc: "Premium salmon sushi.",
          image: "/salmon-sushi.jpg",
        },
        {
          id: 44,
          name: "Prawn Tempura",
          price: 389,
          veg: false,
          desc: "Crispy prawn tempura.",
          image: "/prawn-tempura.jpg",
        },
        {
          id: 45,
          name: "Chicken Teriyaki",
          price: 359,
          veg: false,
          desc: "Japanese chicken dish.",
          image: "/chicken-teriyaki.jpg",
        },
        {
          id: 46,
          name: "Veg Noodles",
          price: 229,
          veg: true,
          desc: "Asian vegetable noodles.",
          image: "/veg-noodles.jpg",
        },
        {
          id: 47,
          name: "Miso Soup",
          price: 149,
          veg: true,
          desc: "Traditional miso soup.",
          image: "/miso-soup.jpg",
        },
        {
          id: 48,
          name: "Mochi Dessert",
          price: 199,
          veg: true,
          desc: "Japanese rice cake dessert.",
          image: "/mochi.jpg",
        },
      ],
    },

    "icecream-world": {
      name: "Icecream World",
      image: img.icecream,
      rating: "4.6",
      reviews: "840+",
      time: "20-30 mins",
      cost: "₹250 for two",
      cuisine: "Ice Cream, Desserts, Shakes",
      place: "Tirunelveli",
      menu: [
        {
          id: 49,
          name: "Vanilla Scoop",
          price: 80,
          veg: true,
          desc: "Classic vanilla scoop.",
          image: "/vanilla-scoop.jpg",
        },
        {
          id: 50,
          name: "Chocolate Sundae",
          price: 180,
          veg: true,
          bestseller: true,
          desc: "Chocolate sundae.",
          image: "/chocolate-sundae.jpg",
        },
        {
          id: 51,
          name: "Brownie Sundae",
          price: 220,
          veg: true,
          bestseller: true,
          desc: "Brownie with ice cream.",
          image: "/brownie-sundae.jpg",
        },
        {
          id: 52,
          name: "Strawberry Shake",
          price: 160,
          veg: true,
          desc: "Strawberry milkshake.",
          image: "/strawberry-shake.jpg",
        },
        {
          id: 53,
          name: "Oreo Shake",
          price: 190,
          veg: true,
          bestseller: true,
          desc: "Creamy Oreo shake.",
          image: "/oreo-shake.jpg",
        },
        {
          id: 54,
          name: "Mango Delight",
          price: 170,
          veg: true,
          desc: "Mango ice cream.",
          image: "/mango-delight.jpg",
        },
        {
          id: 55,
          name: "Kulfi",
          price: 120,
          veg: true,
          desc: "Traditional kulfi.",
          image: "/kulfi.jpg",
        },
        {
          id: 56,
          name: "Ice Cream Cake",
          price: 350,
          veg: true,
          desc: "Frozen cake dessert.",
          image: "/icecream-cake.jpg",
        },
      ],
    },

    "cakes-and-bakes": {
      name: "Cakes & Bakes",
      image: img.cake,
      rating: "4.8",
      reviews: "1K+",
      time: "25-35 mins",
      cost: "₹300 for two",
      cuisine: "Cakes, Bakery, Desserts",
      place: "Tirunelveli",
      menu: [
        {
          id: 57,
          name: "Chocolate Cake",
          price: 499,
          veg: true,
          bestseller: true,
          desc: "Rich chocolate cake.",
          image: "/chocolate-cake.jpg",
        },
        {
          id: 58,
          name: "Black Forest Cake",
          price: 549,
          veg: true,
          bestseller: true,
          desc: "Classic black forest cake.",
          image: "/black-forest-cake.jpg",
        },
        {
          id: 59,
          name: "Red Velvet Pastry",
          price: 120,
          veg: true,
          desc: "Soft red velvet pastry.",
          image: "/red-velvet-pastry.jpg",
        },
        {
          id: 60,
          name: "Cheesecake",
          price: 249,
          veg: true,
          desc: "Creamy cheesecake.",
          image: "/cheesecake.jpg",
        },
        {
          id: 61,
          name: "Brownie",
          price: 140,
          veg: true,
          desc: "Chocolate brownie.",
          image: "/brownie.jpg",
        },
        {
          id: 62,
          name: "Cup Cakes",
          price: 180,
          veg: true,
          desc: "Mini cupcakes.",
          image: "/cupcakes.jpg",
        },
        {
          id: 63,
          name: "Donut",
          price: 90,
          veg: true,
          desc: "Glazed donut.",
          image: "/donut.jpg",
        },
        {
          id: 64,
          name: "Cookies Box",
          price: 199,
          veg: true,
          desc: "Fresh baked cookies.",
          image: "/cookies-box.jpg",
        },
      ],
    },
  };

  const restaurant = restaurants[id];

  const filteredMenu = useMemo(() => {
    if (!restaurant) {
      return [];
    }

    if (foodFilter === "Veg") {
      return restaurant.menu.filter((item) => item.veg);
    }

    if (foodFilter === "Non Veg") {
      return restaurant.menu.filter((item) => !item.veg);
    }

    return restaurant.menu;
  }, [restaurant, foodFilter]);

  if (!restaurant) {
    return <h2>Restaurant Not Found</h2>;
  }

  return (
    <div className="restaurant-page">
      <div
        className="restaurant-banner"
        style={{
          backgroundImage: `url(${restaurant.image})`,
        }}
      >
        <div className="overlay">
          <h1>{restaurant.name}</h1>

          <div className="restaurant-meta">
            ⭐ {restaurant.rating}
            <span>({restaurant.reviews} Ratings)</span>
            {" • "}
            {restaurant.time}
            {" • "}
            {restaurant.cost}
          </div>

          <p>{restaurant.cuisine}</p>
          <h4>{restaurant.place}</h4>
        </div>
      </div>

      <div className="restaurant-menu-header">
        <div>
          <h2>Recommended ({filteredMenu.length})</h2>
          <p>Choose your favourite dishes</p>
        </div>

        <div className="restaurant-food-filters">
          <button
            type="button"
            className={foodFilter === "All" ? "active" : ""}
            onClick={() => setFoodFilter("All")}
          >
            All
          </button>

          <button
            type="button"
            className={foodFilter === "Veg" ? "active veg-filter" : ""}
            onClick={() => setFoodFilter("Veg")}
          >
            <span className="filter-dot veg-dot"></span>
            Veg
          </button>

          <button
            type="button"
            className={
              foodFilter === "Non Veg" ? "active nonveg-filter" : ""
            }
            onClick={() => setFoodFilter("Non Veg")}
          >
            <span className="filter-dot nonveg-dot"></span>
            Non-Veg
          </button>
        </div>
      </div>

      {filteredMenu.length === 0 ? (
        <div className="no-food-result">
          <h2>No {foodFilter} items available</h2>
          <p>Try another filter.</p>
        </div>
      ) : (
        <div className="food-list">
          {filteredMenu.map((item) => (
            <div className="food-item" key={item.id}>
              <div className="food-left">
                <div className={item.veg ? "veg-box" : "nonveg-box"}>
                  <div className="dot"></div>
                </div>

                <h3>{item.name}</h3>

                {item.bestseller && (
                  <span className="best">★ Bestseller</span>
                )}

                <h4>₹{item.price}</h4>
                <p>{item.desc}</p>
              </div>

              <div className="food-right">
                <img src={item.image} alt={item.name} />

                <button
                  type="button"
                  onClick={() => addToCart(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Restaurant;