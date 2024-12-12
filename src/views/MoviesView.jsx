import { Outlet, useNavigate } from "react-router-dom";
import "./MoviesView.css";

function MoviesView() {
  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  const genres = [
    { genre: "Action", id: 28 },
    { genre: "Adventure", id: 12 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Crime", id: 80 },
    { genre: "Family", id: 10751 },
    { genre: "Fantasy", id: 14 },
    { genre: "History", id: 36 },
    { genre: "Horror", id: 27 },
    { genre: "Music", id: 10402 },
  ];

  function handleGenreClick(id) {
    navigate(`/movies/genre/${id}`);
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Hello, User!</h1>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="filter">
        <h3>Genres</h3>
        <ul id="with_genres" className="multi_select text">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="genre-item"
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.genre}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default MoviesView;
