import React, { useEffect, useState } from "react";
import c from "./AllCategories.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/products")
      .then((response) => setCategoriesData(response.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className={c.allCategories}>
      <h3>Bosh toifalar</h3>
      <div>
        {categoriesData.map((category) => (
          <Link>
            <img src={category.image} alt="" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
