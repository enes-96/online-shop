// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, selectedSize, quantity) => {
    // Add the selected product to the cartItems state with the selected size and quantity
    const newCartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity,
      size: selectedSize,
    };
    setCartItems([...cartItems, newCartItem]);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            }
          />
          {/* Pass addToCart function to ProductDetails */}
          <Route
            path="/products/:productId"
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
