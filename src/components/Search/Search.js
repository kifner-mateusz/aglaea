import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Szukaj..."
        className="search__userInput"
      />
      <button className="btn-underline search__category">
        Wszystkie kategorie
      </button>
      <IconButton aria-label="delete" className="search__icon">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
