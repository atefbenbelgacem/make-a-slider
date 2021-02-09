import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import MovieList from "./components/movieList";
import MovieListTop from './components/movieListTop';

function App() {
  const [movies, setMovies] = useState([]);

  const getMoviesRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=7335d088";
    const res = await fetch(url);
    const response = await res.json();
    console.log(response);
    setMovies(response.Search);
  };

  useEffect(() => {
    getMoviesRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center justify-content-start mt-4 mb-4">
        <h1>Best Movies</h1>
      </div>

      <div className="d-flex flex-wrap">
        <MovieListTop movies={movies} />
      </div>

      <div className="row d-flex align-items-center justify-content-start mt-4 mb-4">
        <h1>The Rest Of The Movies</h1>
      </div>

      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
