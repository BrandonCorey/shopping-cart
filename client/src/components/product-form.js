import React, { useState } from "react";
import ProductService from "../services/products";

export default function ProductForm({
  formShowing,
  handleFormShowing,
  handleGetProducts,
  id,
  titleInit,
  quantityInit,
  priceInit,
}) {
  if (!formShowing) return null;

  const [title, setTitle] = useState(titleInit || "");
  const [quantity, setQuantity] = useState(quantityInit || "");
  const [price, setPrice] = useState(priceInit || "");

  const clearForm = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        quantity: quantity,
        price: price,
      };
      if (id) {
        await ProductService.update(id, body);
      } else {
        await ProductService.create(body);
        clearForm();
      }

      await handleGetProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            onChange={(e) => setTitle(() => e.target.value)}
            type="text"
            id="product-name"
            value={title}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            onChange={(e) => setPrice(() => e.target.value)}
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={price}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            onChange={(e) => setQuantity(() => e.target.value)}
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit" onClick={handleFormSubmit}>
            {id ? "Save" : "Add"}
          </button>
          <button type="button" onClick={() => handleFormShowing(false)}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
