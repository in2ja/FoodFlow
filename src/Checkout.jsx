import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ clearCart }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("foodUser"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const coupon = localStorage.getItem("coupon");

  const [payment, setPayment] = useState("Cash on Delivery");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  let deliveryCharge = total >= 299 ? 0 : 40;
  let discount = 0;

  switch (coupon) {
    case "WELCOME50":
      discount = total * 0.5;
      break;

    case "FREEDEL": 
      deliveryCharge = 0;
      break;

    case "BIRYANI20":
      discount = total * 0.2;
      break;

    case "PIZZA30":
      discount = total * 0.3;
      break;

    case "DESSERT15":
      discount = total * 0.15;
      break;

    case "FOODFLOW100":
      if (total >= 599) {
        discount = 100;
      }
      break;

    default:
      discount = 0;
  }

  const finalAmount = Math.max(
    0,
    total - discount + deliveryCharge
  );

  function placeOrder(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty");
      navigate("/menu");
      return;
    }

    if (!user.address || user.address.trim() === "") {
      alert("Please update your delivery address");
      navigate("/profile");
      return;
    }

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const updatedOldOrders = oldOrders.map((oldOrder) => ({
      ...oldOrder,
      status: "Delivered",
    }));

    const newOrder = {
      id: crypto.randomUUID(),

      customer: user.name,
      phone: user.phone,
      address: user.address,

      payment,
      items: [...cart],

      total,
      discount,
      deliveryCharge,
      finalAmount,
      coupon,

      date: new Date().toLocaleString("en-IN"),
      status: "Out for Delivery",

      deliveryPartner: {
        name: "Arun Kumar",
        phone: "+91 98765 43210",
        vehicle: "TN 72 AB 4581",
        eta: "20 minutes",
      },
    };

    updatedOldOrders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOldOrders)
    );

    localStorage.setItem(
      "currentOrder",
      JSON.stringify(newOrder)
    );

    localStorage.removeItem("coupon");

    alert("🎉 Order Placed Successfully!");

    navigate("/track", { replace: true });

    setTimeout(() => {
      clearCart();
    }, 100);
  }

  return (
    <div className="checkout-page">
      <form
        className="checkout-box"
        onSubmit={placeOrder}
      >
        <h1>Checkout</h1>

        <label>Name</label>
        <input
          type="text"
          value={user.name || ""}
          readOnly
        />

        <label>Phone</label>
        <input
          type="text"
          value={user.phone || ""}
          readOnly
        />

        <label>Address</label>
        <textarea
          value={user.address || ""}
          readOnly
        />

        <label>Payment Method</label>
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="Cash on Delivery">
            Cash on Delivery
          </option>

          <option value="UPI">
            UPI
          </option>

          <option value="Credit Card">
            Credit Card
          </option>

          <option value="Debit Card">
            Debit Card
          </option>
        </select>

        <div className="bill-box">
          <div className="bill-row">
            <span>Items Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <div className="bill-row">
            <span>Delivery Charge</span>

            <span>
              {deliveryCharge === 0
                ? "FREE"
                : `₹${deliveryCharge.toFixed(2)}`}
            </span>
          </div>

          {coupon && (
            <>
              <div className="bill-row">
                <span>Coupon Applied</span>
                <span className="coupon">
                  {coupon}
                </span>
              </div>

              <div className="bill-row">
                <span>Discount</span>
                <span className="discount">
                  -₹{discount.toFixed(2)}
                </span>
              </div>
            </>
          )}

          <hr />

          <div className="bill-row final">
            <span>Total Payable</span>
            <span>₹{finalAmount.toFixed(2)}</span>
          </div>
        </div>

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;