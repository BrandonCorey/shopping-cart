import React, { useState } from "react";
import ProductForm from "./product-form";

export default function AddProduct({ handleFetchProducts }) {
  const [isFormShowing, setFormShowing] = useState(false);

  const handleFormShowing = (status) => {
    setFormShowing(() => status);
  };

  return (
    <div className="add-form visible">
      <p>
        {isFormShowing ? null : (
          <button onClick={() => handleFormShowing(true)}>Add A product</button>
        )}
      </p>
      {isFormShowing ? (
        <>
          {" "}
          <h3>Add Product</h3>
          <ProductForm
            isFormShowing={isFormShowing}
            handleFormShowing={handleFormShowing}
            handleFetchProducts={handleFetchProducts}
          />{" "}
        </>
      ) : null}
    </div>
  );
}
