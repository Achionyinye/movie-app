import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { API_KEY } from "../Homepage/Homepage";

const MovieDetailPage = () => {
  const params = useParams();

  console.log(params.movieId);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${params.movieId}&apikey=${API_KEY}`
        );
        console.log(response.data);
      } catch (error: any) {}
    };
    fetchMovie();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default MovieDetailPage;
