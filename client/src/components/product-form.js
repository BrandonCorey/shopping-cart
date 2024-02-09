import React, { useState } from "react";
import ProductService from "../services/products";

export default function ProductForm({
  isFormShowing,
  handleFormShowing,
  handleFetchProducts,
  id,
  titleInit,
  quantityInit,
  priceInit,
}) {
  if (!isFormShowing) return null;

  const [title, setTitle] = useState(titleInit || "");
  const [quantity, setQuantity] = useState(quantityInit || "");
  const [price, setPrice] = useState(priceInit || "");

  const clearForm = () => {
    setTitle("");
    setPrice(0);
    setQuantity(0);
  };

  const isValidSubmission = () => {
    return title.trim() !== "" && quantity.trim() !== "" && price.trim() !== "";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isValidSubmission()) return null;

      const body = {
        title: title,
        quantity: quantity,
        price: price,
      };

      if (id) {
        await ProductService.update(id, body);
        handleFormShowing(false);
      } else {
        await ProductService.create(body);
        clearForm();
        handleFormShowing(false);
      }

      await handleFetchProducts();
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
          <button
            type="submit"
            onClick={handleFormSubmit}
            disabled={!isValidSubmission()}
          >
            {id ? "Save" : "Add"}
          </button>
          <button type="button" onClick={() => handleFormShowing(false)}>
            Collapse
          </button>
        </div>
      </form>
    </>
  );
}
