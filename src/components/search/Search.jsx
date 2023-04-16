import React from "react";
import c from "./Search.module.scss";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className={c.main__search}>
      <div className={c.search__wrapper}>
        <FiSearch />
        <form>
          <input
            type="text"
            className={c.search__input}
            placeholder="Search products"
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
