import React from "react";
import CartContext from "../modules/CartContext";
import { size } from "lodash";

const Cart = () => (
  <CartContext.Consumer>
    {({cart}) =>
      <button>Cart with: {size(cart)} items</button>
    }
  </CartContext.Consumer>
);

export default Cart;
