import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/Pages/Home";
import ProductList from "./components/Pages/ProductList";
import ProductDetails from "./components/Product/ProductDetail";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import useLocalStorage from "./components/hooks/useLocalStorage";


function App() {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const addToCart = (product, selectedSize) => {
    const newCartItem = {
      img: product.image,
      id: product.id,
      name: product.title,
      quantity: 1,
      price: product.price,
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
      <div className="h-screen grid grid-cols-12 grid-rows-12 ">
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
          <Route
            path="/products/:productId"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route path="/checkout" element={<Checkout checkoutItems={cartItems} />} />
        </Routes>
        <Footer />
      </div >
    </Router >
  );
}

export default App;
