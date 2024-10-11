// Articles.js
import React, { useState } from 'react';
import './Articles.css';
import { useNavigate } from 'react-router-dom';
import CartBtn from './CartBtn';
import QuickAdd from './QuickAdd';

const Articles = ({ head, articleData, className }) => {
    const [showQuickAdd, setShowQuickAdd] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    const handleImageClick = (id, img, name, price) => {
        navigate(`/item/${id}`, { state: { id, img, name, price } });
    };

    const addToCartHandler = (id, img, name, price) => {
        setSelectedItem({ id, img, name, price });
        setShowQuickAdd(true);
    };

    const handleCloseQuickAdd = () => {
        setShowQuickAdd(false);
    };

    const addToCart = (item, quantity) => {
        // Implement your add to cart logic here, such as updating context or state
        console.log('Item added to cart:', { ...item, quantity });
        // You might need to update side cart state or context here
    };

    return (
        <>
            <div className="articles-head">
                <span className="a-head">{head}</span>
            </div>
            <div className="Articles">
                <div className="articles-container">
                    {articleData.map((item, idx) => (
                        <div key={idx} className="article-item">
                            <div className="article-img">
                                <img
                                    className="a-img main-img"
                                    alt={item.name}
                                    src={item.pic}
                                    onClick={() => handleImageClick(item.id, item.pic, item.name, item.price)}
                                />
                                <img
                                    className="a-img hover-img"
                                    alt={item.name}
                                    src={item.pic2}
                                    onClick={() => handleImageClick(item.id, item.pic, item.name, item.price)}
                                />
                                <CartBtn
                                    id={item.id}
                                    img={item.pic}
                                    name={item.name}
                                    price={item.price}
                                    onAddToCart={() => addToCartHandler(item.id, item.pic, item.name, item.price)}
                                    className={className}
                                />
                            </div>
                            <div className="article-details" onClick={() => handleImageClick(item.id, item.pic, item.name, item.price)}>
                                <div className="article-name">
                                    <span className="a-name">{item.name}</span>
                                </div>
                                <div className="article-price">
                                    <span className="a-price">RS {item.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {showQuickAdd && (
                    <QuickAdd
                        id={selectedItem.id}
                        img={selectedItem.img}
                        name={selectedItem.name}
                        price={selectedItem.price}
                        onClose={handleCloseQuickAdd}
                        addToCart={addToCart}  // Pass addToCart function
                    />
                )}
            </div>
        </>
    );
}

export default Articles;
