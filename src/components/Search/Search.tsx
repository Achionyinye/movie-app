import React, { useState } from "react";
import "./search.css";

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search = (props: IProps) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setSearchQuery(searchInput);
  };

  return (
    <div className="root">
      <form className="form">
        <input
          onChange={(event) => setSearchInput(event.target.value)}
          type="search"
          className="search-box"
          value={searchInput}
        />
        <button onClick={handleSearch} className="search">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
