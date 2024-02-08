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
    const products = await ProductService.getAll();
    handleSetProducts(products);
  };

  const handleSetCartItems = (cartItems) => {
    setCartItems(cartItems);
  };

  const handleGetCartItems = async () => {
    const cart = await CartService.getAll();
    handleSetCartItems(cart);
  };

  useEffect(() => {
    try {
      handleGetProducts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      handleGetCartItems();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div id="app">
      <Header cartItems={cartItems} />
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
