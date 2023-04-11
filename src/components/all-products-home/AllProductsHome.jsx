import React, { useEffect, useState } from "react";
import c from "./AllProductsHome.module.scss";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AllProductsHome = () => {
  const [AllProductsData, setAllProductsData] = useState([]);

  useEffect(() => {
    axios("https://seal-app-42lge.ondigitalocean.app/category/category-reel")
      .then((response) => setAllProductsData(response.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {AllProductsData.slice(0, AllProductsData.length - 1).map(
        (categoryItem) => (
          <div className={c.allproducts__card}>
            <h2>{categoryItem.categoryName_uz} ===========</h2>
            <Swiper
              slidesPerView={7}
              spaceBetween={30}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              modules={[Navigation]}
            >
              {categoryItem.allRefinedProducts.map((product) => (
                <SwiperSlide>
                  <div className={c.product__card}>
                    <img src={product.productImages[0]} alt="" />
                    <h3>{product.productName_uz}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
      )}
    </div>
  );
};

export default AllProductsHome;
