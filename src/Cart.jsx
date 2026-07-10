import { Link, Navigate } from "react-router-dom";
import "./Cart.css";

function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  const user = JSON.parse(localStorage.getItem("foodUser"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const itemsTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const deliveryCharge = itemsTotal >= 299 ? 0 : 40;
  const finalTotal = itemsTotal + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h1>Your cart is empty</h1>

          <p>
            Add delicious food from your favourite restaurants.
          </p>

          <Link to="/menu" className="browse-btn">
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-heading">
        <div>
          <h1>My Cart</h1>
          <p>
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <Link to="/menu" className="continue-shopping">
          ← Continue Shopping
        </Link>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <div className="cart-name-row">
                  <div>
                    <div
                      className={
                        item.veg
                          ? "cart-food-symbol veg"
                          : "cart-food-symbol nonveg"
                      }
                    >
                      <span></span>
                    </div>

                    <h2>{item.name}</h2>
                  </div>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <p className="item-description">
                  {item.desc ||
                    "Freshly prepared and delivered to your doorstep."}
                </p>

                <div className="cart-card-bottom">
                  <div className="quantity-box">
                    <button
                      type="button"
                      onClick={() => decreaseQty(item.id)}
                    >
                      −
                    </button>

                    <span>{item.qty}</span>

                    <button
                      type="button"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-price">
                    <small>₹{item.price} each</small>
                    <strong>₹{item.price * item.qty}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Bill Details</h2>

          <div className="summary-row">
            <span>Item total</span>
            <span>₹{itemsTotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery fee</span>

            <span className={deliveryCharge === 0 ? "free-text" : ""}>
              {deliveryCharge === 0
                ? "FREE"
                : `₹${deliveryCharge}`}
            </span>
          </div>

          <div className="summary-row">
            <span>Platform fee</span>
            <span>₹0</span>
          </div>

          {deliveryCharge === 0 ? (
            <div className="delivery-message success">
              🎉 You unlocked free delivery!
            </div>
          ) : (
            <div className="delivery-message">
              Add ₹{299 - itemsTotal} more for free delivery.
            </div>
          )}

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>To Pay</span>
            <span>₹{finalTotal}</span>
          </div>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>

          <p className="secure-note">
            🔒 Safe and secure checkout
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Cart;