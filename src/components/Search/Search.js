import React from "react";
import SearchIcon from "../../assets/icons/search-24px.svg";

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
      <button className="search__icon">
        <SearchIcon fill="#000" width={50} height={50} />
      </button>
    </div>
  );
};

export default Search;
