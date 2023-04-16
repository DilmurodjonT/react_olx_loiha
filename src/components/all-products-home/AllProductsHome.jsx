import React, { useEffect, useState } from "react";
import c from "./AllProductsHome.module.scss";
import { Link } from "react-router-dom";
import "./styles.scss";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
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
          <div className={c.allProductMainDiv}>
            <h2>{categoryItem.categoryName_uz}</h2>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              modules={[Navigation, Autoplay]}
            >
              {categoryItem.allRefinedProducts.map((product) => (
                <SwiperSlide>
                  <Link
                    className={c.productLink}
                    to={`/product/${product._id}`}
                  >
                    <div className={c.productCard}>
                      <img src={product.productImages[0]} alt="" />
                      <h3>{product.productName_uz}</h3>
                    </div>
                  </Link>
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
