import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import CardContainer from "../../components/CardContainer/CardContainer";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import axios from "axios";
import debounce from "lodash.debounce";

export const API_KEY = "46fbd66e";

const Homepage = () => {
  const [movies, setMovies] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchError, setSearchError] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("america");

  //console.log(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);

  const fetchMovies = async (query:string) => {
    try {
      setSearchError(null);
      setMovies([]);
      setIsFetching(true);
      console.log(searchQuery, "searchQuery");
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query || "america"}&apikey=${API_KEY}`
      );
      setIsFetching(false);
      console.log(response.data.Search);
      if (!response.data.Search) {
        setSearchError("No movies found");
        return;
      }
      setMovies(response.data.Search); //here we are setting the movies to the response.data.Search
    } catch (error: any) {
      setMovies([]);
      console.log(error);
      setSearchError(error);
      setIsFetching(false);
    }
  };

  const debounceSearch = debounce(fetchMovies, 1000);

  useEffect(() => {
    fetchMovies("america");
  }, []);

  //const changeSearch = debounce(fetchMovies, 1000);

  return (
    <div>
      <Navbar />
      <Search debounceSearch={debounceSearch} setSearchQuery={setSearchQuery} />
      <CardContainer
        movies={movies}
        isFetching={isFetching}
        error={searchError}
      />
    </div>
  );
};

export default Homepage;
