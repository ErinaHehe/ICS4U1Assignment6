import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./RegisterView.css";

const genres = [
  "Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi",
  "Fantasy", "Thriller", "Animation", "Documentary", "Mystery", "Adventure"
];

function RegisterView() {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      selectedGenres: checked
        ? [...prev.selectedGenres, value]
        : prev.selectedGenres.filter((genre) => genre !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, rePassword, selectedGenres } = formData;

    if (!firstName || !lastName || !email || !password || !rePassword) {
      alert("All fields must be filled!");
      return;
    }

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    if (selectedGenres.length < 10) {
      alert("Please select at least 10 genres.");
      return;
    }

    setUser({ firstName, lastName, email, selectedGenres });

    alert("Registration successful!");
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <h2>Create an Account</h2>
        <form action="#" method="POST">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" name="first-name" required />

          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="re-enter-password">Re-enter Password</label>
          <input type="password" id="re-enter-password" name="re-enter-password" required />

          <fieldset>
            <legend>Select Your Favorite Genres (at least 10)</legend>
            {genres.map((genre) => (
              <div key={genre}>
                <label>
                  <input
                    type="checkbox"
                    value={genre}
                    onChange={handleCheckboxChange}
                    checked={formData.selectedGenres.includes(genre)}
                  />
                  {genre}
                </label>
              </div>
            ))}
          </fieldset>

          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">Already have an account? <a href="#">Login</a></p>
      </div>
    </div>
  )
}

export default RegisterView;