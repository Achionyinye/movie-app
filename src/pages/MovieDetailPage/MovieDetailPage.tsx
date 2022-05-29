import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { API_KEY } from "../Homepage/Homepage";
import style from './MovieDetailPage.module.css';


const MovieDetailPage = () => {
  const params = useParams();

  const [response, setResponse] = useState<any>(null);
  const [, setMovies] = useState<any>([]);
  const [, setIsFetching] = useState(false);
  const [, setSearchError] = useState<any>(null);

  console.log(params)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setSearchError(null);
        setMovies([]);
        setIsFetching(true);
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${params.movieId}&apikey=${API_KEY}`
        );
        setIsFetching(false);

        setResponse(response.data);
        setMovies(response.data);
  
      } catch (error: any) {
        setMovies([{ movieId: "", Title: "", Poster: "", Year: "", imdbID: "" }]);
        setSearchError(error);
        setIsFetching(false);
      }
    };
    fetchMovie();
  }, [params.movieId]);
  return (
    <div>
      <Navbar />
      <h2>Details of the Movie</h2>
      <div className={style.detailPage}>
        <div style={{ display: "flex", justifyContent: "center", width: "80%" }}>
          <img src={response?.Poster} className={style.imageCover} alt ="movie-poster"/>
        </div>
        <div className={style.detail}>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Title:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Title}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Actors:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Actors}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>BoxOffice:</b></p>
            <p style={{ textAlign: "right" }}>{response?.BoxOffice}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Country:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Country}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Date of Release:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Released}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Director:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Director}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Genre:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Genre}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Language:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Language}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Plot:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Plot}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Runtime:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Runtime}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Writer:</b></p>
            <p style={{ textAlign: "right" }}>{response?.Writer}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Rating:</b></p>
            <p style={{ textAlign: "right" }}>{response?.imdbRating}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <p><b>Votes:</b></p>
            <p style={{ textAlign: "right" }}>{response?.imdbVotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
