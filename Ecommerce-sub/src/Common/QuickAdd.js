
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './QuickAdd.css';
import Wrapper from "./Wrapper";
import Button from "./Button";
import SideCart from './SideCart'; // Import the side cart component here

const QuickAdd = ({ id, img, name, price, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [isCartActive, setIsCartActive] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return storedItems;
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity
        };

        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === product.id);
            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            }
            return [...prevItems, product];
        });

        setIsCartActive(true); // Show the SideCart
    };

    const handleUpdateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveCartItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
                        <div className="full-details" onClick={() => Navigate(`/item/${id}`)}>
                            <span className="f-details">VIEW FULL DETAILS</span>
                        </div>
                    </div>
                </div>

                <SideCart
                isActive={isCartActive}
                cartItems={cartItems}
                toggleSideCart={() => setIsCartActive(false)}
                updateCartItemQuantity={handleUpdateQuantity}
                removeCartItem={handleRemoveCartItem}
            />
            </div>
        </div>
    );
};

export default QuickAdd;
