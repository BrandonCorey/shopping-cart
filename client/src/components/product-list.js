import React from "react";
import Product from "./product";

export default function ProductList({
  products,
  handleGetProducts,
  handleGetCartItems,
}) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            {...product}
            handleGetProducts={handleGetProducts}
            handleGetCartItems={handleGetCartItems}
          />
        ))}
      </ul>
    </div>
  );
}
