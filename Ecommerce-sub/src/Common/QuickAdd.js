
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './QuickAdd.css';
import Wrapper from "./Wrapper";
import Button from "./Button";
import SideCart from './SideCart'; // Import the side cart component here

const QuickAdd = ({ id, img, name, price, onClose }) => {
    const [cartItems, setCartItems] = useState([]); // Manage cart items here
    const [quantity, setQuantity] = useState(1);
    const [isSideCartActive, setIsSideCartActive] = useState(false); // SideCart toggle state
    const navigate = useNavigate();

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };
    const removeCartItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
      };
    const handleAddToCart = () => {
        const item = { id, img, name, price, quantity };
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevItems, item];
            }
        });
        setIsSideCartActive(true); // Open the side cart after adding an item
        console.log('Items in cart:', cartItems); // Log cart items
    };

    const toggleSideCart = () => {
        setIsSideCartActive(prevState => !prevState); // Toggle side cart
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

    // Define itemBtn style variable
    const itemBtn = {
        width: '27vw',
        height: '7vh',
        fontSize: '2vh',
        letterSpacing: '0.2vw'
    };

    return (
        <div className="quickadd-overlay">
            <div className="quickadd-modal">
                <div className="headers">
                    <span className="q-head">Quick Add</span>
                    <i className="bi bi-x" onClick={onClose}></i>
                </div>
                <div className="quickadd-data">
                    <div className="quick-imgs">
                        <img src={img} alt={name} />
                    </div>
                    <div className="details">
                        <div className="item-details">
                            <span className="name">{name}</span>
                            <span className="price">RS {(price * quantity).toFixed(2)}</span>
                        </div>
                        <div className="wrapper-btn">
                            <Wrapper quantity={quantity} onQuantityChange={handleQuantityChange} />
                            <Button data={"ADD TO CART"} style={itemBtn} onClick={handleAddToCart} />
                        </div>
                        <div className="full-details" onClick={() => navigate(`/item/${id}`)}>
                            <span className="f-details">VIEW FULL DETAILS</span>
                        </div>
                    </div>
                </div>

                <SideCart
                    isActive={isSideCartActive}
                    cartItems={cartItems}
                    toggleSideCart={toggleSideCart}
                    updateCartItemQuantity={updateCartItemQuantity}
                    removeCartItem={removeCartItem}
                />
            </div>
        </div>
    );
};

export default QuickAdd;
