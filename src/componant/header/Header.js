import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="headerleft">
        <Link to="/">
          <img
            className="headericon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="imdp logo"
          />
        </Link>
        <Link to="/movies/popular">
          <span>popular</span>
        </Link>
        <Link to="/movies/top_rated">
          <span>top rated</span>{" "}
        </Link>
        <Link to="/movies/upcoming">
          <span>upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
