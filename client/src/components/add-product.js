import React, { useState } from "react";
import ProductForm from "./product-form";

export default function AddProduct({ handleSetProducts }) {
  const [formShowing, setFormShowing] = useState(false);

  const handleFormShowing = (status) => {
    setFormShowing(status);
  };

  return (
    <div className="add-form visible">
      <p>
        {formShowing ? null : (
          <button onClick={() => handleFormShowing(true)}>Add A product</button>
        )}
      </p>
      {formShowing ? (
        <>
          {" "}
          <h3>Add Product</h3>
          <ProductForm
            formShowing={formShowing}
            handleFormShowing={handleFormShowing}
            handleSetProducts={handleSetProducts}
          />{" "}
        </>
      ) : null}
    </div>
  );
}
