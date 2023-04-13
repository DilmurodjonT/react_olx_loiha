import React, { useEffect, useState } from "react";
import c from "./AllCategories.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    axios("https://seal-app-42lge.ondigitalocean.app/category/category-nest")
      .then((response) => setCategoriesData(response.data))
      .catch((err) => console.error(err));
  }, []);

  const imagesForCategories = [
    "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
  ];

  return (
    <section className={c.allCategories}>
      <h3>Bosh toifalar</h3>
      <div className={c.allCategories__container}>
        {categoriesData.mainCategory_uz ? (
          categoriesData.mainCategory_uz.map((category, i) => (
            <Link className={c.category__item}>
              <div className={c.category__item__image}>
                <img src={imagesForCategories[i]} alt="" />
              </div>
              <p>{category}</p>
            </Link>
          ))
        ) : (
          <p>Loding...</p>
        )}
      </div>
    </section>
  );
};

export default AllCategories;
