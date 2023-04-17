import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  useEffect(() => {
    axios(
      `https://seal-app-42lge.ondigitalocean.app/product/single-product/${id}`,
      { timeout: 10000 }
    )
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, [id]);
  // console.log(data?.singleProduct[0].productImages[0]);
  return (
    <div>
      {data?.singleProduct ? (
        <img
          src={data?.singleProduct[0].productImages[activeImageIndex]}
          alt=""
        />
      ) : (
        <></>
      )}
      {data?.singleProduct[0].productImages.map((image, index) => (
        <img
          style={
            index === activeImageIndex
              ? { border: "1px solid dodgerblue" }
              : null
          }
          width={100}
          src={image}
          alt=""
          onClick={() => setactiveImageIndex(index)}
        />
      ))}
    </div>
  );
};

export default Product;
