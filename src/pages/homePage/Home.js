import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./home.css";
import MovieList from "../../componant/movieList/MovieList";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="poster-img">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt="poster"
              />
            </div>
            <div className="poster-img-overlay">
              <div className="poster-img-title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="poster-img-runtime">
                {movie ? movie.release_date : ""}
                <span className="poster-img-rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </span>
              </div>
              <div className="poster-img-desc">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
