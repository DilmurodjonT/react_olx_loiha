import React from "react";
import AllCategories from "../../components/all-categories/AllCategories";
import AllProductsHome from "../../components/all-products-home/AllProductsHome";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
const Home = () => {
  return (
    <div>
      <Container>
        <AllCategories />
        <Search />
        <AllProductsHome />
      </Container>
    </div>
  );
};

export default Home;
