import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./cardContainer.css";

interface IProp {
  movies: Record<string, any>[];
}

const CardContainer = (props: IProp) => {
  console.log(props.movies, "***MOVIES");
  return (
    <div className="card-root">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          poster={movie.Poster}
          title={movie.Title}
          imdbId={movie.imdbID}
          year={movie.Year}
        />
      ))}
    </div>
  );
};

export default CardContainer;
