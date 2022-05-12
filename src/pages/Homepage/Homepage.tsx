import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import CardContainer from "../../components/CardContainer/CardContainer";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import axios from "axios";

export const API_KEY = "46fbd66e";

const Homepage = () => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=america&apikey=${API_KEY}`
      );
      setMovies(response.data.Search);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <Search />
      <CardContainer movies={movies} />
    </div>
  );
};

export default Homepage;
