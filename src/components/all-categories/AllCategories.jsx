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
    "https://us.123rf.com/450wm/ardely/ardely1601/ardely160100075/52214461-vector-round-icon-green-stroller-symbol-of-baby-toy-in-flat-design-on-grunge-paper-background.jpg?ver=6",
    "https://thumbs.dreamstime.com/b/%D0%BA%D0%BB%D1%8E%D1%87-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BD%D0%B0-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D0%B9-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BA%D0%B5-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81-122434792.jpg",
    "https://img2.freepng.ru/20180513/lsq/kisspng-car-wash-computer-icons-clip-art-5af8c151e8f808.2763212215262518579543.jpg",
    "https://e7.pngegg.com/pngimages/871/130/png-clipart-brand-line-angle-line-angle-employment.png",
    "https://thedogretreat.com/wp-content/uploads/2020/01/AdobeStock_281792532.jpeg",
    "https://img2.freepng.ru/20180615/jbe/kisspng-mid-century-modern-table-danish-modern-furniture-b-danish-modern-5b248583ce80a3.8848457715291201318458.jpg",
    "https://www.mediapark.uz/upload/file/mp/products/images/WhsL5q5ndo74hddhSO9-nZFyj4xFfod-.jpg",
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
