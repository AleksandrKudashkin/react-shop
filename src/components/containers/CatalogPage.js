import React from "react";
import Products from "../../constants/Products";
import Catalog from "../Catalog";
import CartContext from "../../modules/CartContext";

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: props.cart };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    this.setState({
      cart: [...this.state.cart, item]
    });
  }

  render() {
    return (
      <CartContext.Provider value={{cart: this.state.cart, addToCart: this.addToCart}}>
        <Catalog products={Products} />
      </CartContext.Provider>
    )
  }
}

CatalogPage.defaultProps = {
  cart: []
};

export default CatalogPage;
