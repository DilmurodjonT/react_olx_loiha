import React from "react";
import AllCategories from "../../components/all-categories/AllCategories";
import AllProductsHome from "../../components/all-products-home/AllProductsHome";
import { Container } from "../../utils/Components";
const Home = () => {
  return (
    <div>
      <Container>
        <AllCategories />
        <AllProductsHome />
      </Container>
    </div>
  );
};

export default Home;
