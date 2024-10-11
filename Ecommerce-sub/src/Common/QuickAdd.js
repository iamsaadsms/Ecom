import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './QuickAdd.css';
import Wrapper from "./Wrapper";
import Button from "./Button";

const QuickAdd = ({ id, img, name, price, onClose, addToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // Initialize navigate

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        const item = { id, img, name, price, quantity };
        console.log('Adding to cart:', item); // Log item details
        addToCart(item); // Add item to cart
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
            </div>
        </div>
    );
};

export default QuickAdd;
