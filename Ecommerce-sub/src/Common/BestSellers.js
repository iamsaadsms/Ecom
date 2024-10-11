import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BestSellers.css';
import QuickAdd from './QuickAdd';
import CartBtn from './CartBtn';

const BestSellers = ({ imgs, perPage, head, className, style }) => {
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: perPage,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const addToCartHandler = (img, name, price) => {
    setSelectedItem({ img, name, price });
    setShowQuickAdd(true);
  };

  return (
    <div className='best-sellers'>
      <div className='splide-head'>
        <span className='s-head'>{head}</span>
      </div>
      <div className='slide-content'>
        <Slider  {...settings} >
          {imgs.map((item, idx) => (
            <div key={idx} style={{ position: 'relative' }} className='slick-slide'>
              <img src={item.pic} alt={item.pic} className='img-splide' style={style} />
              <CartBtn img={item.pic} name={item.name} price={item.price} onAddToCart={addToCartHandler} className={className} style={{position:"absolute", zIndex:"11"}}/>
              <div className='details'>
                <span className='name'>{item.name}</span>
                <span className='price'>RS {item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {showQuickAdd && (
        <QuickAdd
          img={selectedItem.img}
          name={selectedItem.name}
          price={selectedItem.price}
          onClose={() => setShowQuickAdd(false)}
        />
      )}
    </div>
  );
};

export default BestSellers;
