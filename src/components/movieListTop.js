import React from "react";

const MovieListTop = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div
            className="m-2"
            key={index}
          >
            <img src={movie.Poster} alt="movie"></img>
            <div className="d-flaex justify-content-center align-items-center">
              <span>{movie.Title}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieListTop;
