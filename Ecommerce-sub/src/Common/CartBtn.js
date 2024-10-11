import React from "react";
import './CartBtn.css';

const CartBtn = ({ img, name, price, onAddToCart, className }) => {
  return (
    <div className="CartBtn" onClick={() => onAddToCart(img, name, price)}>
      <div className={`add-to-cart ${className}`}>
        <span className='cart'>ADD TO CART</span>
      </div>
    </div>
  );
};

export default CartBtn;
