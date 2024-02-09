import React, { useState } from "react";
import Product from "./product";
import EditProduct from "./edit-product";

export default function ProductWrapper({
  product,
  handleFetchProducts,
  handleFetchCartItems,
}) {
  const [isFormShowing, setFormShowing] = useState(false);

  const handleFormShowing = (status) => {
    setFormShowing(() => status);
  };

  return (
    <li key={product._id} className="product">
      <Product
        {...product}
        handleFetchProducts={handleFetchProducts}
        handleFetchCartItems={handleFetchCartItems}
        handleFormShowing={handleFormShowing}
      />
      <EditProduct
        {...product}
        isFormShowing={isFormShowing}
        handleFetchProducts={handleFetchProducts}
        handleFormShowing={handleFormShowing}
      />
    </li>
  );
}
