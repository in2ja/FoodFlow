import "./Offers.css";

function Offers() {
  const offers = [
    {
      code: "WELCOME50",
      title: "50% OFF",
      desc: "Get 50% off on your first order",
      condition: "Minimum order ₹199",
      tag: "New User Offer",
    },
    {
      code: "FREEDEL",
      title: "Free Delivery",
      desc: "No delivery charge on your order",
      condition: "Valid above ₹299",
      tag: "Delivery Offer",
    },
    {
      code: "BIRYANI20",
      title: "20% OFF",
      desc: "Save more on Biryani King orders",
      condition: "Today only",
      tag: "Food Offer",
    },
    {
      code: "PIZZA30",
      title: "30% OFF",
      desc: "Flat discount on Pizza Palace",
      condition: "Valid on pizza items",
      tag: "Hot Deal",
    },
    {
      code: "DESSERT15",
      title: "15% OFF",
      desc: "Discount on ice creams and cakes",
      condition: "Dessert orders only",
      tag: "Sweet Deal",
    },
    {
      code: "FOODFLOW100",
      title: "₹100 OFF",
      desc: "Get ₹100 off on large orders",
      condition: "Valid above ₹599",
      tag: "Mega Offer",
    },
  ];

  function applyOffer(code) {
    localStorage.setItem("coupon", code);
    alert(`${code} coupon applied successfully!`);
  }

  return (
    <div className="offers-page">
      <div className="offers-hero">
        <h1>Best Offers For You</h1>
        <p>Apply coupons and save more on every Food Flow order.</p>
      </div>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.code}>
            <span className="offer-tag">{offer.tag}</span>

            <h2>{offer.title}</h2>
            <p>{offer.desc}</p>
            <h4>{offer.condition}</h4>

            <div className="coupon-box">{offer.code}</div>

            <button onClick={() => applyOffer(offer.code)}>
              Apply Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;