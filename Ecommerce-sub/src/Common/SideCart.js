import React from "react";
import './SideCart.css';
import Wrapper from "./Wrapper";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

const SideCart = ({ isActive, cartItems, toggleSideCart, updateCartItemQuantity, removeCartItem }) => {
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleViewCart = () => {
        console.log('Navigating to Cart with items:', cartItems);
        navigate('/cart', {
            state: { cartItems },
        });
    };

    return (
        <div className={`side-cart-container ${isActive ? 'active' : ''}`}>
            <div className="side-cart-header">
                <span className="side-cart-head">YOUR CART</span>
                <span className="side-cart-head" id="side-cross" onClick={toggleSideCart}>
                    <i className="bi bi-x cart-cross side-cross"></i>
                </span>
            </div>
            <div className="items-in-side-cart">
                {cartItems.length === 0 ? (
                    <span className="empty-side-cart">YOUR CART IS EMPTY</span>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="side-cart-items-wrapper">
                            <div className="side-item-rel">
                                <div className="sidecart-item-img">
                                    <img className="sidecart-img" src={item.img} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <span className="cart-item-name">{item.name.toUpperCase()}</span>
                                    <span className="cart-item-price">RS {item.price}</span>
                                    <div className="item-actions">
                                        <div className="item-action-wrapper">
                                            <Wrapper
                                                quantity={item.quantity}
                                                onQuantityChange={(newQuantity) => updateCartItemQuantity(item.id, newQuantity)}
                                            />
                                        </div>
                                        <button onClick={() => removeCartItem(item.id)} className='remove-btn-side-cart'>
                                            <i className="bi bi-trash3 trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <hr />
            <div className="subtotal-side-cart">
                <span>Subtotal:</span>
                <span>RS {subtotal.toFixed(2)}</span>
            </div>
            <div className="side-cart-actions">
                <Button data={"GO TO CART"} className='side-cart-btn' onClick={handleViewCart} />
            </div>
            <div className="side-cart-actions">
                <Button data={"CHECKOUT"} className='side-cart-btn' />
            </div>
        </div>
    );
};

export default SideCart;
