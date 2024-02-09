import React, { useEffect, useState } from "react";
import ProductList from "./components/product-list";
import AddProduct from "./components/add-product";
import Header from "./components/header";
import ProductService from "./services/products";
import CartService from "./services/cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleFetchProducts = async () => {
    try {
      const products = await ProductService.getAll();
      setProducts(() => products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchCartItems = async () => {
    try {
      const cart = await CartService.getAll();
      setCartItems(() => cart);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  useEffect(() => {
    handleFetchCartItems();
  }, []);

  return (
    <div id="app">
      <Header
        cartItems={cartItems}
        handleFetchCartItems={handleFetchCartItems}
      />
      <main>
        <ProductList
          products={products}
          handleFetchProducts={handleFetchProducts}
          handleFetchCartItems={handleFetchCartItems}
        />
        <AddProduct handleFetchProducts={handleFetchProducts} />
      </main>
    </div>
  );
}
