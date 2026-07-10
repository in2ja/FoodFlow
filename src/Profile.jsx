import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("foodUser")) || {};

  const [user, setUser] = useState({
    name: currentUser.name || "",
    email: currentUser.email || "",
    phone: currentUser.phone || "",
    address: currentUser.address || "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function saveProfile() {
    const updatedUser = {
      ...currentUser,
      name: user.name.trim(),
      email: user.email.trim(),
      phone: user.phone.trim(),
      address: user.address.trim(),
    };

    // Update logged in user
    localStorage.setItem(
      "foodUser",
      JSON.stringify(updatedUser)
    );

    // Update registered user also
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(updatedUser)
    );

    alert("✅ Profile Updated Successfully!");

    navigate("/");
    window.location.reload();
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-top">
          <div className="profile-avatar">
            {user.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div>
            <h2>{user.name || "User"}</h2>
            <p>FoodFlow Member</p>
          </div>
        </div>

        <h3>Edit Profile</h3>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>Delivery Address</label>
        <textarea
          name="address"
          rows="4"
          value={user.address}
          onChange={handleChange}
          placeholder="Enter your delivery address"
          required
        />

        <button
          type="button"
          className="save-btn"
          onClick={saveProfile}
        >
          Save Changes
        </button>

      </div>
    </div>
  );
}

export default Profile;