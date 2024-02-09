import React from "react";
import ProductWrapper from "./product-wrapper";

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
          <ProductWrapper
            key={product._id}
            product={product}
            handleFetchProducts={handleFetchProducts}
            handleFetchCartItems={handleFetchCartItems}
          />
        ))}
      </ul>
    </div>
  );
}
