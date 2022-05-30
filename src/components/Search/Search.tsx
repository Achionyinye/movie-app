import React, { useState } from "react";
import style from "./search.module.css";
import debounce from 'lodash.debounce';

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  debounceSearch: () => void
}

const Search = (props: IProps) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    props.setSearchQuery(searchInput);
    props.debounceSearch();
  };
  // const debouncedLogHi = _.debounce(Search, 1500)
 // const changeSearch = debounce(Handlefetch, 1000);
  //  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchInput(event.target.value);
  //  };
  //  const debouncedHandleChange = debounce(handleChange, 1000);

    // const updateSearchQuery = debounce(handleSearch, 1000);
  //  const debouncedHandleChange = (query: string) => {
  //    debounce(handleChange, 1000)(query);
  //  };

  return (
    <div className={style.root}>
      <form className={style.form}>
        <input
          onChange={handleSearch}
          type="search"
          className={style.searchBox}
          value={searchInput}
        />
        {/* <button onClick={() =>props.setSearchQuery(searchInput) } className={style.search}>
          Search
        </button> */}
      </form>
    </div>
  );
};

export default Search;
