import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componant/header/Header";
import Home from "./pages/homePage/Home";
import MovieList from "./componant/movieList/MovieList";
import Movie from "./pages/moviedetails/Movie";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>error message</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
