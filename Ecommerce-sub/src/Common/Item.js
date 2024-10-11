import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Wrapper from './Wrapper';
import Button from './Button';
import Drop from './Dropdown/Drop';
import './Item.css';
import s1 from '../Media/s1.jpg';
import s2 from '../Media/s2.jpg';
import s3 from '../Media/s3.jpg';
import s4 from '../Media/s4.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function Item({ addToCart }) {
  const location = useLocation();
  const { img = s1, name = 'Unknown Item', price = 0, details = [] } = location.state || {};

  const images = [s1, s2, s3, s4, img];
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const item = { id: location.state.id, img, name, price, quantity };
    console.log('Adding to cart:', item); // Log item details
    addToCart(item);
  };

  const itemBtn = {
    width: '27vw',
    height: '7vh',
    fontSize: '2vh',
    letterSpacing: '0.2vw'
  };

  return (
    <div id="Item">
      <Navbar />
      <div className='item-details'>
        <div className='item-data'>
          <div className='item-name'>
            <span className='i-name'>{name.toUpperCase()}</span>
          </div>
          <hr />
          <div className='item-desc'>
            <span className='i-desc'>
              Detailing brushes are small, precise tools for cleaning tight spaces and delicate surfaces. Ideal for automotive, art, and electronics care, they ensure thorough and careful cleaning.
            </span>
          </div>
          <hr />
          <div className='price-cal'>
            <div className='item-price'>
              <span className='i-price'>RS {price.toFixed(2)}</span>
            </div>
            <div className='i-wrapper'>
              <Wrapper quantity={quantity} onQuantityChange={handleQuantityChange} />
              <span className='i-qty'>QUANTITY</span>
            </div>
          </div>
          <hr />
          <div className='item-btn'>
            <Button data={"ADD TO CART"} style={itemBtn} onClick={handleAddToCart} />
          </div>
          <hr />
          <div className='dropdown'>
            {details.map((detail, index) => (
              <Drop key={index} head={detail.head} info={detail.info} />
            ))}
            <Drop head={"DISCLAIMER"} info={"All orders may be subject to customs and duty payable by the recipient of the order depending on the rules and regulations."} />
          </div>
        </div>
        <div className="my-slider">
          <Splide
            options={{
              type: 'fade',
              height: '80vh',
              rewind: true,
              autoplay: true,
              pagination: false,
              arrows: true,
              heightRatio: 0.5,
            }}
          >
            {images.map((src, index) => (
              <SplideSlide key={index}>
                <img src={src} alt={`Slide ${index + 1}`} className="img-item" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <Footer />
    </div>
  );
}
