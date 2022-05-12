import React, { useEffect } from "react";
import cardImg from "../../images/iron-man.jpeg";
import "./movieCard.css";

interface IProp {
  poster: string;
  title: string;
  year: string;
  imdbId: string;
}

const MovieCard = (prop: IProp) => {
  const { poster, title, year } = prop;
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <img className="card-img" src={poster} alt="iron man" />
      <p className="card-date">({year})</p>
    </div>
  );
};

export default MovieCard;
