import React from "react";
import CartItem from "./cart-item";
import CartService from "../services/cart";

export default function Header({ cartItems, handleFetchCartItems }) {
  const getCartSum = () => {
    return cartItems.reduce(
      (total, current) => total + current.price * current.quantity,
      0,
    );
  };

  const handleCheckout = async () => {
    try {
      await CartService.checkout();
      handleFetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your cart</h2>
        {cartItems.length < 1 ? (
          <>
            <p>Your cart is empty</p>
            <p>Total $0</p>
            <button className="checkout">Total $0</button>
          </>
        ) : (
          <>
            <table className="cart-items">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => {
                  return <CartItem key={cartItem._id} cartItem={cartItem} />;
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="total">
                    Total: ${getCartSum().toFixed(2).toString()}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="checkout-button" onClick={handleCheckout}>
              <button className="checkout">Checkout</button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
