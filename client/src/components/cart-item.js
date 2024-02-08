import React from "react";

export default function CartItem({ cartItem }) {
  return (
    <>
      <tr>
        <td>{cartItem.title}</td>
        <td>{cartItem.quantity}</td>
        <td>{cartItem.price}</td>
      </tr>
    </>
  );
}
