import React from "react";
import TextBox from "./TextBox";
import Image from "./Image";
import Price from "./Price";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  const {title, price, imageUrl} = product;
  return <div>
    <TextBox text={title} />
    <br />
    <Price price={price} />
    <br />
    <Image src={imageUrl} />
    <br />
    <AddToCart product={product}/>
  </div>
};

export default ProductCard;
