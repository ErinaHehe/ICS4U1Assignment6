import React, { useState, useContext } from "react";
import "./SettingView.css";

const genres = [
  "Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi",
  "Fantasy", "Thriller", "Animation", "Documentary", "Mystery", "Adventure"
];

function SettingsView() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    preferredGenres: user.preferredGenres || []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      preferredGenres: checked
        ? [...prev.preferredGenres, value]
        : prev.preferredGenres.filter((genre) => genre !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, preferredGenres } = formData;

    if (!firstName || !lastName || preferredGenres.length === 0) {
      alert("Please fill out all fields and select at least one genre.");
      return;
    }

    setUser({ ...user, firstName, lastName, preferredGenres });
    alert("Settings updated successfully!");
  };

  return (
    <div className="settings-container">
      <div className="form-container">
        <h2>Settings</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            disabled
          />

          <fieldset>
            <legend>Preferred Genres</legend>
            {genres.map((genre) => (
              <div key={genre}>
                <label>
                  <input
                    type="checkbox"
                    value={genre}
                    onChange={handleCheckboxChange}
                    checked={formData.preferredGenres.includes(genre)}
                  />
                  {genre}
                </label>
              </div>
            ))}
          </fieldset>

          <button type="submit" className="settings-button">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default SettingsView;