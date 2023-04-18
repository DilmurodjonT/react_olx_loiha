import React, { useEffect, useState } from "react";
import c from "./AllProductsHome.module.scss";
import { Link } from "react-router-dom";
import { CardBtnLink } from "../../utils/Components";
import { BsCart, BsHandIndexThumb } from "react-icons/bs";
import "./styles.scss";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { cardBtnLink } from "../../utils/Components";

const AllProductsHome = () => {
  const [AllProductsData, setAllProductsData] = useState([]);

  useEffect(() => {
    axios("https://seal-app-42lge.ondigitalocean.app/category/category-reel")
      .then((response) => setAllProductsData(response.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(AllProductsData);
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
                      <span>
                        {`${product.productMainCategory_uz} >
                          ${product.productSubCategory_uz}`}
                      </span>
                      <strong>
                        {`${product.productSizesAndQuantity[0].price} СУМ - ${
                          product.productSizesAndQuantity[
                            product.productSizesAndQuantity.length - 1
                          ].price
                        } СУМ`}
                      </strong>
                      {product.productSizesAndQuantity.length > 1 ? (
                        <CardBtnLink
                          icon={<BsHandIndexThumb />}
                          text="Tanlash"
                          link="/"
                        />
                      ) : (
                        <CardBtnLink
                          icon={<BsCart />}
                          text="Savatga qo'shish"
                          link="/"
                        />
                      )}
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
