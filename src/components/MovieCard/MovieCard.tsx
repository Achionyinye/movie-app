import "./movieCard.css";
import { Link } from "react-router-dom";

interface IProp {
  poster: string;
  title: string;
  year: string;
  imdbId: string;
}

const MovieCard = (prop: IProp) => {
  const { poster, title, year } = prop;
  return (
    <Link to={`/movie/${prop.imdbId}`} className="card">
      <h5 className="card-title">{title}</h5>
      <img className="card-img" src={poster} alt="iron man" />
      <p className="card-date">({year})</p>
    </Link>
  );
};

export default MovieCard;
