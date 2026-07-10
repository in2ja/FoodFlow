import { Link } from "react-router-dom";
import "./Orders.css";

function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <h1>My Orders</h1>

        <div className="empty-orders">
          <h2>No Orders Yet</h2>
          <p>Your previous orders will appear here.</p>
          <Link to="/menu">Order Food</Link>
        </div>
      </div>
    );
  }

  const reversedOrders = orders.slice().reverse();

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      <div className="orders-list">
        {reversedOrders.map((order, index) => {
          const displayStatus = index === 0 ? order.status : "Delivered";

          return (
            <div className="order-card" key={order.id}>
              <div className="order-top">
                <div>
                  <h2>Order #{order.id}</h2>
                  <p>{order.date}</p>
                </div>

                <span
                  className={
                    displayStatus === "Delivered"
                      ? "status delivered"
                      : "status preparing"
                  }
                >
                  {displayStatus}
                </span>
              </div>

              <div className="order-info">
                <p><b>Payment:</b> {order.payment}</p>
                <p><b>Address:</b> {order.address}</p>

                {order.coupon && <p><b>Coupon:</b> {order.coupon}</p>}
              </div>

              <div className="order-items">
                <h3>Items</h3>

                {order.items.map((item) => (
                  <div className="order-item" key={item.id}>
                    <span>{item.name} × {item.qty}</span>
                    <b>₹{item.price * item.qty}</b>
                  </div>
                ))}
              </div>

              <div className="order-bill">
                <p>
                  <span>Items Total</span>
                  <b>₹{order.total}</b>
                </p>

                {order.deliveryCharge !== undefined && (
                  <p>
                    <span>Delivery Charge</span>
                    <b>
                      {order.deliveryCharge === 0
                        ? "FREE"
                        : `₹${order.deliveryCharge}`}
                    </b>
                  </p>
                )}

                {order.discount > 0 && (
                  <p className="discount-row">
                    <span>Discount</span>
                    <b>-₹{order.discount}</b>
                  </p>
                )}

                <h3>
                  <span>Total Paid</span>
                  <b>
                    ₹
                    {order.finalAmount !== undefined
                      ? order.finalAmount
                      : order.total}
                  </b>
                </h3>
              </div>

              {displayStatus !== "Delivered" && (
                <Link to="/track" className="track-btn">
                  Track Order
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderHistory;