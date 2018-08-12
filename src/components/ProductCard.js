import React from "react";
import TextBox from "./TextBox";
import Image from "./Image";
import Price from "./Price";

const ProductCard = ({ title, price, imageUrl }) => (
  <div>
    <TextBox text={title} />
    <br />
    <Price price={price} />
    <br />
    <Image src={imageUrl} />
  </div>
);

export default ProductCard;
