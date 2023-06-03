import React from "react";

const Cart = ({ cartInfo }) => {
  //price
  let shippingTotal = 0;
  let total = 0;
  for (const product of cartInfo) {
    total += product.price;
    shippingTotal += product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shippingTotal + tax;
  return (
    <div>
      <h3>Order summary</h3>
      <p>Cart length: {cartInfo.length}</p>
      <p>Total price: ${total.toFixed(2)}</p>
      <p>Total shipping charge: ${shippingTotal}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
