import React from "react";
import ReactDOM from 'react-dom';
import TextBox from "./TextBox";
import Image from "./Image";
import Price from "./Price";
import CartContext from "../modules/CartContext";


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.amount,
      position: this.props.position,
      dragging: this.props.dragging,
      positionProp: this.props.positionProp,
      relative: this.props.relative
    }
  }

  componentDidMount() {
    let currentTargetRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState(Object.assign(
      {},
      this.state,
      {
        position: {
          x: currentTargetRect.left,
          y: currentTargetRect.top
        }
      }
    ))
  }

  setField(e, name) {
    this.setState(Object.assign({}, this.state, {[name]: e.target.value}))
  }

  onMouseUp(e) {
    this.setState(Object.assign({}, this.state, {dragging: false}));
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseDown(e) {
    if (e.button !== 0) return; // only left mouse button
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    this.setState(
      Object.assign(
        {},
        this.state,
        {dragging: true,
          positionProp: 'absolute',
          relative: {
            x: e.pageX - currentTargetRect.left,
            y: e.pageY - currentTargetRect.top
        }
        }
      )
    );
    e.stopPropagation();
    e.preventDefault()
  }

  onMouseMove(e) {
    if (!this.state.dragging) return;

    this.setState(
      Object.assign(
        {},
        this.state,
        {
          position: {
            x: e.pageX - this.state.relative.x,
            y: e.pageY - this.state.relative.y
          }
        }
      )
    );
    e.stopPropagation();
    e.preventDefault()
  }

  render() {
    const { product } = this.props;
    const { title, price, imageUrl } = this.props.product;
    return <div
      onMouseDown={(e)=> this.onMouseDown(e)}
      onMouseUp={(e)=>this.onMouseUp(e)}
      onMouseMove={(e)=>this.onMouseMove(e)}
      style={{
        position: this.state.positionProp,
        left: this.state.position.x + 'px',
        top: this.state.position.y + 'px'
      }}>
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
  amount: 1,
  dragging: false,
  positionProp: 'static',
  position: { x: 0, y: 0 },
  relative: { x: 0, y: 0 }
};

export default ProductCard;
