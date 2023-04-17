import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

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
        <img src={data?.singleProduct[0].productImages[0]} alt="" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
