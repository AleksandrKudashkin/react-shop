import React, { Fragment } from "react";
import CartContext from "../modules/CartContext";

class AddToCart extends React.Component {
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
    return <Fragment>
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
      </Fragment>
  }
}

AddToCart.defaultProps = {
  amount: 1
};

export default AddToCart;