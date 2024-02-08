import React from "react";

export default function ProductList({
  products,
  Product,
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
