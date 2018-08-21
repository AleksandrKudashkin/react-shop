import React from "react";
import TextBox from "./TextBox";
import Image from "./Image";
import Price from "./Price";
import CartContext from "../modules/CartContext";


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.amount
    }
  }

  setField(e, name) {
    this.setState(Object.assign({}, this.state, {[name]: e.target.value}))
  }

  render() {
    const {product} = this.props;
    const {title, price, imageUrl} = this.props.product;
    return <div>
      <TextBox text={title} />
      <br />
      <Price price={price} />
      <br />
      <Image src={imageUrl} />
      <br />
      <CartContext.Consumer>
        {({addToCart}) =>
          <button onClick={() => addToCart(product, this.state.amount)}>
            Add to the cart
          </button>
        }
      </CartContext.Consumer>
      <label htmlFor='amount'>Amount:</label>
      <input name='amount'
             id={`${product.id}-amount`}
             value={this.state.amount}
             onChange={(e) => this.setField(e, 'amount')}
      />
    </div>
  }
}

ProductCard.defaultProps = {
  amount: 1
};

export default ProductCard;
