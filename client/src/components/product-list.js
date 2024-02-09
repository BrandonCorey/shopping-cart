import React from "react";
import Product from "./product";

export default function ProductList({
  products,
  handleFetchProducts,
  handleFetchCartItems,
}) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            {...product}
            handleFetchProducts={handleFetchProducts}
            handleFetchCartItems={handleFetchCartItems}
          />
        ))}
      </ul>
    </div>
  );
}
