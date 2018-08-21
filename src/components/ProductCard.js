import React from "react";
import TextBox from "./TextBox";
import Image from "./Image";
import Price from "./Price";
import CartContext from "../modules/CartContext";


const ProductCard = ({ product }) => {
  const { title, price, imageUrl } = product;
  return <div>
    <TextBox text={title} />
    <br />
    <Price price={price} />
    <br />
    <Image src={imageUrl} />
    <br />
    <CartContext.Consumer>
      {({addToCart}) =>
        <button onClick={() => addToCart(product)}>
          Add to the cart
        </button>
      }
    </CartContext.Consumer>
  </div>
};

export default ProductCard;
