import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@splidejs/splide/dist/css/splide.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sale from './Sale/Sale';
import Articles from './Common/Articles';
import Item from './Common/Item';
import SaleJson from './JSON/Sale.json';
import SideCart from './Common/SideCart';
import NewArrivals from './NewArrivals/NewArrivals';
import NArrivals from './JSON/NewArrivals.json';
import QuickAdd from './Common/QuickAdd';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isSideCartActive, setIsSideCartActive] = useState(false);

  const addToCart = (newItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
    setIsSideCartActive(true); // Show the side cart
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeCartItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const toggleSideCart = () => {
    setIsSideCartActive(prevState => !prevState);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/sale/:id" element={<Articles items={SaleJson} />} />
        <Route path="/item/:id" element={<Item addToCart={addToCart} toggleSideCart={toggleSideCart} />} />
        <Route path="/quick-add/:id" element={<QuickAdd addToCart={addToCart} toggleSideCart={toggleSideCart} />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/new-arrivals/:id" element={<Articles items={NArrivals} />} />
      </Routes>
      <SideCart
        isActive={isSideCartActive}
        cartItems={cartItems}
        toggleSideCart={toggleSideCart}
        updateCartItemQuantity={updateCartItemQuantity}
        removeCartItem={removeCartItem}
      />
    </Router>
  );
}

export default App;
