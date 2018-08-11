import React, { Component } from "react";
import Cheque from "./Cheque";
import { map } from "lodash";

const Item = ({ item }) => {
  return (
    <li>
      {item.label}, price: {item.price} rub, qnt: {item.quantity}
    </li>
  );
};

const ItemsList = ({ items }) => {
  return (
    <div>
      <ul>
        {map(items, (item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

class ShowCheque extends Component {
  render() {
    let cheque = new Cheque();
    cheque.addItem({ label: "socks", quantity: 2, price: 20 });
    cheque.addItem({ label: "socks", quantity: 1, price: 20 });
    cheque.addItem({ label: "scarf", quantity: 1, price: 100 });
    cheque.deleteItem(2);
    return (
      <div>
        Items: <ItemsList items={cheque.items} />
        Total amount: {cheque.totalCount} items
        <br />
        Total Sum: {cheque.totalSum} rub
      </div>
    );
  }
}

export default ShowCheque;
