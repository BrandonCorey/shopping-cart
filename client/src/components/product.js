import React, { useState } from "react";
import ProductForm from "./product-form";
import ProductService from "../services/products";
import CartService from "../services/cart";

export default function Product({
  _id,
  title,
  quantity,
  price,
  handleGetProducts,
  handleGetCartItems,
}) {
  const [formShowing, setFormShowing] = useState(false);

  const handleFormShowing = (status) => {
    setFormShowing(status);
  };

  const handleDeleteProduct = async () => {
    try {
      await ProductService.remove(_id);
      handleGetProducts();
      handleGetCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const added = await CartService.add(_id);
      if (!added) new Error("Could not add to cart");
      else {
        handleGetCartItems();
        handleGetProducts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li key={_id} className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">$ {price}</p>
        <p className="quantity">{`${quantity} left in stock`}</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
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
      {formShowing ? (
        <div className="edit-form">
          <h3>Edit Product</h3>
          <ProductForm
            handleFormShowing={handleFormShowing}
            formShowing={formShowing}
            id={_id}
          />
        </div>
      ) : null}
    </li>
  );
}
