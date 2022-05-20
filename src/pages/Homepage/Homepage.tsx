import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import CardContainer from "../../components/CardContainer/CardContainer";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import axios from "axios";

export const API_KEY = "46fbd66e";

const Homepage = () => {
  const [movies, setMovies] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchError, setSearchError] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("america");

  console.log(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setSearchError(null);
        setMovies([]);
        setIsFetching(true);
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`
        );
        setIsFetching(false);
        setMovies(response.data.Search);//here we are setting the movies to the response.data.Search
      } catch (error: any) {
        setMovies([]);
        setSearchError(error);
        setIsFetching(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <Search setSearchQuery={setSearchQuery} />
      <CardContainer
        movies={movies}
        isFetching={isFetching}
        error={searchError}
      />
    </div>
  );
};

export default Homepage;
