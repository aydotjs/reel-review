import React from "react";
import { useState } from "react";
import tempMovieData from "./MovieData";
const Navbar = () => {
    const [query, setQuery] = useState("");
    // const [movies, setMovies] = useState(tempMovieData);
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🎦</span>
        <h1>flick spot</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{tempMovieData.length}</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
