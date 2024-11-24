import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation to access passed state
import './Cart.css';
import Wrapper from '../Common/Wrapper';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]); // Directly hold cart items here
  const [loading, setLoading] = useState(false); // We won't need loading for now as we fetch from localStorage

  // Retrieve cart items passed from the previous page, if available
  const { cartItems: initialCartItems } = location.state || {};

  useEffect(() => {
    if (initialCartItems && initialCartItems.length > 0) {
      setCartItems(initialCartItems); // Set the items passed from previous page
    } else {
      // If no items are passed via location, fetch them from localStorage
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(savedCartItems);
    }
  }, [initialCartItems]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateCartItemQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Save updated items to localStorage
  };

  const removeCartItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Save updated items to localStorage
  };

  return (
    <div className="Cart">
      <Navbar />
      <div className="cart-h">
        <span className="cart-head">CART</span>
      </div>
      <div className="product-h">
        <div className="p-l">
          <span className="p-h">PRODUCT</span>
        </div>
        <div className="p-r">
          <span className="p-h">QUANTITY</span>
          <span className="p-h">TOTAL</span>
        </div>
      </div>
      <hr style={{ margin: "0 17vw", marginTop: "1vh" }} />

      <div className="cart-content-final">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className='cart-left'>
                <img src={item.img} alt={item.name} className="img-item" /> {/* Correct image path */}
                <div className="items-in-cart">
                  <span className="i-detail i-n">{item.name}</span>
                  <span className="i-detail">Price: RS {item.price}</span>
                  <button onClick={() => removeCartItem(item.id)} className="remove-cart-btn">
                    <i className="bi bi-trash3 cart-trash"></i>
                  </button>
                </div>
              </div>

              <div className="cart-right">
                <div className="cart-qty">
                  <span className="i-detail">Quantity: {item.quantity}</span>
                  <Wrapper
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => updateCartItemQuantity(item.id, newQuantity)}
                  />
                </div>
                <div className="cart-item-total">
                  <span className="i-total">RS {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <hr />
      
      <div className="cart-ultimate-total">
        <span className="i-total">Total: RS {totalPrice.toFixed(2)}</span> {/* Displaying the total price */}
      </div>
    <Footer />
    </div>
  );
};

export default Cart;
