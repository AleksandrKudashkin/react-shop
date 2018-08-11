class Cheque {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    console.log(item);
    // adding an item to the collection
    this.items.push({
      label: item.label,
      price: item.price,
      quantity: item.quantity
    })
  }

  deleteItem(position) {
    // remove one element at position, counting from 1
    this.items.splice(position - 1, 1)
  }

  get totalSum() {
    // get sum of all the items
    return this.items.reduce(
      (sum, item) => (sum + item.price * item.quantity),
      0)
  }

  get totalCount() {
    // get items count
    return this.items.reduce(
      (sum, item) => (sum + item.quantity),
      0)
  }
}

export default Cheque;