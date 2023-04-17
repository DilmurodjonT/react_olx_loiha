import React, { useState } from "react";
import c from "./Search.module.scss";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const Search = () => {
  const [searchData, setSearchData] = useState(null);

  const searchProduct = (e) => {
    axios
      .get(
        `https://seal-app-42lge.ondigitalocean.app/product/search/${e.target.value}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setSearchData(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setSearchData(null);
      });
  };
  console.log(searchData);
  return (
    <div className={c.search}>
      <div className={c.search__heading}>
        <h2>Search products</h2>
      </div>
      <div className={c.main__search}>
        <div className={c.search__wrapper}>
          <FiSearch />
          <form>
            <input
              onChange={searchProduct}
              type="text"
              className={c.search__input}
              placeholder="Search products"
            />
            <button>Search</button>
          </form>
        </div>
        {searchData ? <div className={c.search__results}></div> : <></>}
      </div>
    </div>
  );
};

export default Search;
