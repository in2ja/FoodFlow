import "./Help.css";

function Help() {
  return (
    <div className="help-page">

      {/* Hero */}
      <section className="help-hero">
        <h1>🧡 Customer Support</h1>
        <p>
          We're here to help you 24/7. Get quick assistance for your orders,
          payments and delivery.
        </p>
      </section>

      {/* Support Cards */}
      <section className="support-grid">

        <div className="support-card">
          <div className="icon">💬</div>
          <h3>Live Chat</h3>
          <p>Chat instantly with our support executive.</p>
          <button>Start Chat</button>
        </div>

        <div className="support-card">
          <div className="icon">📞</div>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
          <button>Call Now</button>
        </div>

        <div className="support-card">
          <div className="icon">📧</div>
          <h3>Email Support</h3>
          <p>support@foodflow.com</p>
          <button>Send Email</button>
        </div>

      </section>

      {/* FAQ */}
      <section className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">
          <h3>📦 Where is my order?</h3>
          <p>You can track your order live from the Orders page.</p>
        </div>

        <div className="faq-box">
          <h3>💳 Payment failed?</h3>
          <p>Your amount will automatically be refunded within 5-7 business days.</p>
        </div>

        <div className="faq-box">
          <h3>🍔 Wrong food delivered?</h3>
          <p>Contact us immediately through Live Chat or Call Support.</p>
        </div>

        <div className="faq-box">
          <h3>❌ Cancel an order?</h3>
          <p>Orders can be cancelled before the restaurant starts preparing food.</p>
        </div>

      </section>

      {/* Contact Form */}

      <section className="contact-support">

        <h2>Still Need Help?</h2>

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Order ID"
          />

          <textarea
            rows="5"
            placeholder="Describe your issue..."
          ></textarea>

          <button>Submit Request</button>

        </form>

      </section>

    </div>
  );
}

export default Help;