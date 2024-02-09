import React, { useState } from "react";
import ProductService from "../services/products";
import CartService from "../services/cart";

export default function Product({
  _id,
  title,
  quantity,
  price,
  handleFetchProducts,
  handleFetchCartItems,
  handleFormShowing,
}) {
  const handleDeleteProduct = async () => {
    try {
      await ProductService.remove(_id);
      handleFetchProducts();
      handleFetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = async () => {
    try {
      await CartService.add(_id);
      handleFetchCartItems();
      handleFetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <p className="quantity">{`${quantity} left in stock`}</p>
      <div className="actions product-actions">
        <button
          className="add-to-cart"
          onClick={handleAddToCart}
          disabled={quantity < 1 ? true : false}
        >
          Add to cart
        </button>
        <button className="edit" onClick={() => handleFormShowing(true)}>
          Edit
        </button>
      </div>
      <button className="delete-button" onClick={handleDeleteProduct}>
        <span>X</span>
      </button>
    </div>
  );
}
