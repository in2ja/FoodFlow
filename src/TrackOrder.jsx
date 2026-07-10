import { Link, Navigate } from "react-router-dom";
import "./TrackOrder.css";

function TrackOrder() {
  const user = JSON.parse(localStorage.getItem("foodUser"));

  const order = JSON.parse(
    localStorage.getItem("currentOrder")
  );

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!order) {
    return (
      <div className="track-empty-page">
        <div className="track-empty-card">
          <div className="track-empty-icon">📦</div>

          <h1>No Active Order</h1>

          <p>
            Place an order to start live delivery tracking.
          </p>

          <Link to="/menu">
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  const payableAmount =
    order.finalAmount !== undefined
      ? order.finalAmount
      : order.total;

  return (
    <div className="track-page">
      <div className="track-heading">
        <div>
          <span className="live-badge">
            <span></span>
            LIVE ORDER
          </span>

          <h1>Track Your Order</h1>

          <p>
            Your food is on the way. Follow the live delivery
            updates below.
          </p>
        </div>

        <div className="track-order-id">
          <small>Order ID</small>
          <strong>
            #{String(order.id).slice(-8).toUpperCase()}
          </strong>
        </div>
      </div>

      <div className="track-layout">
        <div className="track-left">
          <div className="live-map-card">
            <div className="map-top">
              <div>
                <h2>Live Delivery Map</h2>
                <p>
                  Delivery partner is heading to your address.
                </p>
              </div>

              <span className="eta-badge">
                Arriving in {order.deliveryPartner?.eta || "20 minutes"}
              </span>
            </div>

            <div className="map-box">
              <iframe
                title="Live delivery location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  order.address
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-rider">
                🛵
              </div>
            </div>

            <div className="delivery-address">
              <div className="address-icon">📍</div>

              <div>
                <small>Delivering to</small>
                <h3>{order.address}</h3>
              </div>
            </div>
          </div>

          <div className="ordered-items-card">
            <div className="section-heading">
              <h2>Order Details</h2>
              <span>{order.items.length} items</span>
            </div>

            <div className="track-items-list">
              {order.items.map((item) => (
                <div className="track-order-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="track-item-info">
                    <div
                      className={
                        item.veg
                          ? "track-food-symbol veg"
                          : "track-food-symbol nonveg"
                      }
                    >
                      <span></span>
                    </div>

                    <h3>{item.name}</h3>

                    <p>
                      ₹{item.price} × {item.qty}
                    </p>
                  </div>

                  <strong>
                    ₹{item.price * item.qty}
                  </strong>
                </div>
              ))}
            </div>

            <div className="track-bill">
              <div>
                <span>Items total</span>
                <span>₹{order.total}</span>
              </div>

              <div>
                <span>Delivery charge</span>
                <span>
                  {order.deliveryCharge === 0 ||
                  order.deliveryCharge === undefined
                    ? "FREE"
                    : `₹${order.deliveryCharge}`}
                </span>
              </div>

              {order.discount > 0 && (
                <div className="track-discount">
                  <span>Discount</span>
                  <span>-₹{order.discount}</span>
                </div>
              )}

              <div className="track-grand-total">
                <span>Total Paid</span>
                <span>₹{payableAmount}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="track-right">
          <div className="status-card">
            <h2>Order Status</h2>

            <div className="status-timeline">
              <div className="timeline-item completed">
                <div className="timeline-icon">✓</div>

                <div>
                  <h3>Order Confirmed</h3>
                  <p>Your order has been received.</p>
                </div>
              </div>

              <div className="timeline-item completed">
                <div className="timeline-icon">👨‍🍳</div>

                <div>
                  <h3>Food Prepared</h3>
                  <p>Your meal is packed and ready.</p>
                </div>
              </div>

              <div className="timeline-item active">
                <div className="timeline-icon">🛵</div>

                <div>
                  <h3>Out for Delivery</h3>
                  <p>Your delivery partner is on the way.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">🏠</div>

                <div>
                  <h3>Delivered</h3>
                  <p>Your order will arrive shortly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="partner-card">
            <div className="partner-title">
              <h2>Delivery Partner</h2>
              <span>Verified</span>
            </div>

            <div className="partner-profile">
              <div className="partner-avatar">
                {order.deliveryPartner?.name
                  ?.charAt(0)
                  .toUpperCase() || "A"}
              </div>

              <div>
                <h3>
                  {order.deliveryPartner?.name || "Arun Kumar"}
                </h3>

                <p>⭐ 4.9 · 1,250 deliveries</p>
              </div>
            </div>

            <div className="partner-info-row">
              <span>📞 Phone</span>
              <strong>
                {order.deliveryPartner?.phone ||
                  "+91 98765 43210"}
              </strong>
            </div>

            <div className="partner-info-row">
              <span>🛵 Vehicle</span>
              <strong>
                {order.deliveryPartner?.vehicle ||
                  "TN 72 AB 4581"}
              </strong>
            </div>

            <div className="partner-actions">
              <a
                href={`tel:${
                  order.deliveryPartner?.phone ||
                  "+919876543210"
                }`}
              >
                📞 Call
              </a>

              <a
                href={`https://wa.me/${(
                  order.deliveryPartner?.phone ||
                  "919876543210"
                ).replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                💬 Message
              </a>
            </div>
          </div>

          <div className="payment-card">
            <h3>Payment Information</h3>

            <div>
              <span>Payment method</span>
              <strong>{order.payment}</strong>
            </div>

            <div>
              <span>Order date</span>
              <strong>{order.date}</strong>
            </div>
          </div>

          <Link to="/" className="track-home-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;