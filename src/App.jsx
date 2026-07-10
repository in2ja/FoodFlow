import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Menu from "./Menu";
import Cart from "./Cart";
import Checkout from "./Checkout";
import TrackOrder from "./TrackOrder";
import Profile from "./Profile";
import OrderHistory from "./OrderHistory";
import About from "./About";
import Contact from "./Contact";
import Offers from "./Offers";
import Restaurant from "./Restaurant";
import Help from "./Help";

function App() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  function addToCart(product) {
    const user = JSON.parse(
      localStorage.getItem("foodUser")
    );

    if (!user) {
      alert("Please login first to add items to cart");

      navigate("/login");

      return;
    }

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          qty: 1,
        },
      ];
    });

    alert("Item added to cart!");
  }

  // Increase quantity
  function increaseQty(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  }

  // Decrease quantity
  function decreaseQty(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  // Remove item completely
  function removeItem(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  // Clear entire cart
  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  // Number of all item quantities
  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Restaurant list */}
        <Route
          path="/menu"
          element={
            <Menu addToCart={addToCart} />
          }
        />

        {/* Category menu */}
        <Route
          path="/menu/:type"
          element={
            <Menu addToCart={addToCart} />
          }
        />

        {/* Individual restaurant */}
        <Route
          path="/restaurant/:id"
          element={
            <Restaurant addToCart={addToCart} />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <Checkout clearCart={clearCart} />
          }
        />

        {/* Track current order */}
        <Route
          path="/track"
          element={<TrackOrder />}
        />

        {/* Previous orders */}
        <Route
          path="/orders"
          element={<OrderHistory />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Offers */}
        <Route
          path="/offers"
          element={<Offers />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Help */}
        <Route
          path="/help"
          element={<Help />}
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<Home />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;