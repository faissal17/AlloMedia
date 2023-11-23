class OrderDetails {
  constructor({ order = null, item = null, quantity = null }) {
    this.order = order;
    this.item = item;
    this.quantity = quantity;
  }
}

module.exports.OrderDetails = OrderDetails;
