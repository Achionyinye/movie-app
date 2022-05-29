import MovieCard from "../MovieCard/MovieCard";
import style from "./cardContainer.module.css";
import { Circles } from "react-loader-spinner";

interface IProp {
  movies: Record<string, any>[];
  isFetching: boolean;
  error: any;
}

const CardContainer = (props: IProp) => {
  console.log(props.error)
  return (
    <>
    <div className={style.cardRoot}>     
      {props.isFetching && (
        <Circles ariaLabel="loading-indicator" />
      )}

      {props.error && <h1 style={{color: "white"}}>No result!!</h1>}

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