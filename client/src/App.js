import React, { useEffect, useState } from "react";
import ProductList from "./components/product-list";
import AddProduct from "./components/add-product";
import Header from "./components/header";
import ProductService from "./services/products";
import CartService from "./services/cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleSetProducts = async (products) => {
    setProducts(products);
  };

  const handleGetProducts = async () => {
    try {
      const products = await ProductService.getAll();
      handleSetProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetCartItems = (cartItems) => {
    setCartItems(cartItems);
  };

  const handleGetCartItems = async () => {
    try {
      const cart = await CartService.getAll();
      handleSetCartItems(cart);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    handleGetCartItems();
  }, []);

  return (
    <div id="app">
      <Header cartItems={cartItems} handleGetCartItems={handleGetCartItems} />
      <main>
        <ProductList
          products={products}
          handleGetProducts={handleGetProducts}
          handleGetCartItems={handleGetCartItems}
        />
        <AddProduct handleSetProducts={handleSetProducts} />
      </main>
    </div>
  );
}
