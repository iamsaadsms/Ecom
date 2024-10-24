
import React, { useState } from 'react';
import './Articles.css';
import { useNavigate } from 'react-router-dom';
import CartBtn from './CartBtn';
import QuickAdd from './QuickAdd';
import SideCart from './SideCart'; 

const Articles = ({ head, articleData, className }) => {
    const [cartItems, setCartItems] = useState([]); 
    const [isSideCartActive, setIsSideCartActive] = useState(false); 
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

  
    const addToCart = (newItem) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === newItem.id);
            if (existingItem) {
                
                return prevItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
               
                return [...prevItems, newItem];
            }
        });
        console.log('Items in cart:', cartItems); 
        setIsSideCartActive(true);
    };

    const toggleSideCart = () => {
        setIsSideCartActive(prevState => !prevState);
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
                        addToCart={addToCart}  
                    />
                )}
            </div>
      
            <SideCart
                isActive={isSideCartActive} 
                cartItems={cartItems}
                toggleSideCart={toggleSideCart} 
                updateCartItemQuantity={updateCartItemQuantity} 
               
            />
        </>
    );
};

export default Articles;
