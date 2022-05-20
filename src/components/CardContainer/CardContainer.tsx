import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./cardContainer.css";
import { Circles } from "react-loader-spinner";

interface IProp {
  movies: Record<string, any>[];
  isFetching: boolean;
  error: any;
}

const CardContainer = (props: IProp) => {
  return (
    <>
   
    <div className="card-root">
      {props.isFetching && (
        <Circles ariaLabel="loading-indicator" />
      )}

      {props.error && <h1>An error ocurred!!</h1>}

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
    </>
  );
};

export default CardContainer;