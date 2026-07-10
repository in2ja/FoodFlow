import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Whether you have a question, feedback,
          or need support, our team is here to help.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <div className="info-box">
            <h3>📍 Office Address</h3>
            <p>
              Food Flow Pvt. Ltd.<br />
              25, Anna Nagar,<br />
              Tirunelveli, Tamil Nadu - 627001
            </p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@foodflow.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Sunday</p>
            <p>8:00 AM - 11:00 PM</p>
          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <h2>Send us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
      <div className="map-section">
  <iframe
    title="Food Flow Location"
    src="https://www.google.com/maps?q=Tirunelveli,Tamil%20Nadu&output=embed"
    width="100%"
    height="400"
    style={{ border: 0, borderRadius: "20px" }}
    loading="lazy"
  ></iframe>
</div>

    </div>
  );
}

export default Contact;