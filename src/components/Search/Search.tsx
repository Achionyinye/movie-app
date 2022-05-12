import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="root">
      <form className="form">
        <input type="search" className="search-box" />
        <button className="search">Search</button>
      </form>
    </div>
  );
};

export default Search;
