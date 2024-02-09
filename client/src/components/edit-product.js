import React, { useState } from "react";
import ProductForm from "./product-form";

export default function EditProduct({
  _id,
  title,
  quantity,
  price,
  handleFetchProducts,
  handleFormShowing,
  isFormShowing,
}) {
  return (
    <>
      {isFormShowing ? (
        <div className="edit-form">
          <h3>Edit Product</h3>
          <ProductForm
            handleFormShowing={handleFormShowing}
            handleFetchProducts={handleFetchProducts}
            isFormShowing={isFormShowing}
            id={_id}
            titleInit={title}
            quantityInit={quantity}
            priceInit={price}
          />
        </div>
      ) : null}
    </>
  );
}
