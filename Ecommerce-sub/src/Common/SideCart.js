import React from "react";
import './SideCart.css';
import Wrapper from "./Wrapper";
import Button from "./Button";

const SideCart = ({ isActive, cartItems, toggleSideCart, updateCartItemQuantity, removeCartItem }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const sidecartBtn = {
        width: '30vw',
        height: '8vh',
        fontSize: '2.5vh',
        letterSpacing: '0.2vw'
    };

    return (
        <div className={`side-cart ${isActive ? 'active' : ''}`}>
            <div className="side-header">
                <span className="side-head">YOUR CART</span>
                <span className="side-head" id="side-cross" onClick={toggleSideCart}>
                    <i className="bi bi-x cart-cross"></i>
                </span>
            </div>
            <div className="items-in-cart">
                {cartItems.length === 0 ? (
                    <span className="empty-cart">YOUR CART IS EMPTY</span>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-items">
                            <div className="item-rel">
                                <div className="item-img">
                                    <img className="sidecart-img" src={item.img} alt={item.name} />
                                </div>
                                <div className="item-info">
                                    <span className="cart-item-name">{item.name.toUpperCase()}</span>
                                    <span className="cart-item-price">RS {item.price.toFixed(2)}</span>
                                    <div className="item-det">
                                        <div className="item-wrapper">
                                            <Wrapper
                                                quantity={item.quantity}
                                                onQuantityChange={(newQuantity) => updateCartItemQuantity(item.id, newQuantity)}
                                            />
                                            <button onClick={() => removeCartItem(item.id)} className='remove-btn'>
                                                <i className="bi bi-trash3 trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))
                )}
            </div>
            <div className="total-btns">
                <hr />
                <div className="subtotal">
                    <span className="s-total sub">SUBTOTAL: </span>
                    <span className="s-total">RS {subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-btn">
                    <Button data={"CONTINUE TO CHECKOUT"} onClick={toggleSideCart} style={sidecartBtn} />
                </div>
            </div>
        </div>
    );
};


export default SideCart;
