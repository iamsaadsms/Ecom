import React from 'react';
import './Wrapper.css';

const Wrapper = ({ quantity, onQuantityChange }) => {
  const handlePlusClick = () => {
    onQuantityChange(quantity + 1);
  };

  const handleMinusClick = () => {
    onQuantityChange(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <div className="wrapper">
      <span className="minus" onClick={handleMinusClick}>-</span>
      <span className="num">{quantity}</span>
      <span className="plus" onClick={handlePlusClick}>+</span>
    </div>
  );
};

export default Wrapper;
