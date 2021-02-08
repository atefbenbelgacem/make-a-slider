import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => {
        return <div className="rrr" key={index}>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      })}
    </>
  );
};

export default MovieList;
