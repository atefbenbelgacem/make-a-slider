import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div
            className="image-container d-flex justify-content-start m-3"
            key={index}
          >
            <img src={movie.Poster} alt="movie"></img>
            <div className="overlay d-flaex justify-content-center align-items-center">
              <span>{movie.Title}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
