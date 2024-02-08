import React, { useState } from "react";
import ProductService from "../services/products";

export default function ProductForm({
  formShowing,
  handleFormShowing,
  handleSetProducts,
  id,
}) {
  if (!formShowing) return null;

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleFormSubmit = async () => {
    try {
      const body = { title, quantity, price };
      let products;
      if (id) {
        products = await ProductService.update(id, body);
      } else {
        products = await ProductService.create(body);
      }

      handleSetProducts(products);
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
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="product-name"
            value={title}
            defaultValue={title}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={price}
            defaultValue={price}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            defaultValue={quantity}
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
