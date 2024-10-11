import React, { useState, useEffect } from 'react';
import './Slider.css';
import Button from '../Common/Button';

const Slider = () => {
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000',
            title: 'Jackets Collection 2017',
            data: 'DISCOVER MORE',
        },
        {
            image: 'https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000',
            title: 'Accessories',
            data: 'SHOP COLLECTION',
        },
        {
            image: 'https://images.unsplash.com/photo-1416838375725-e834a83f62b7?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000',
            title: 'Winter Shoes',
            data: 'SHOP NOW',
        },
        {
            image: 'https://images.unsplash.com/35/JOd4DPGLThifgf38Lpgj_IMG.jpg?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000',
            title: 'Winter Collection 2017',
            data: 'DISCOVER MORE',
        },
        {
            image: 'https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000',
            title: 'Summer Collection',
            data: 'SHOP COLLECTION',
        }
    ];

    let style = {
        position: 'absolute',
        right: '10vw',
        top: '60vh'
    }

    const [current, setCurrent] = useState(0);
    const [autoUpdate, setAutoUpdate] = useState(true);

    const nextSlide = () => {
        setCurrent(current < slides.length - 1 ? current + 1 : 0);
    };

    const prevSlide = () => {
        setCurrent(current > 0 ? current - 1 : slides.length - 1);
    };

    useEffect(() => {
        if (autoUpdate) {
            const interval = setInterval(nextSlide, 4000);
            return () => clearInterval(interval);
        }
    }, [current, autoUpdate]);

    return (
        <div className="cd-slider" onMouseEnter={() => setAutoUpdate(false)} onMouseLeave={() => setAutoUpdate(true)}>
            <ul>
                {slides.map((slide, index) => (
                    <>
                    <li key={index} className={index === current ? 'current' : index === (current === 0 ? slides.length - 1 : current - 1) ? 'prev_slide' : ''}>
                        <div className="image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className="content">
                            <h2>{slide.title}</h2>
                        </div>
                    </li>
                    <Button data={slide.data} style={style} />
                    </>
                ))}
            </ul>
            {slides.length > 1 && (
                <nav className="nav_arrows">
                    <button className="prev" aria-label="Prev" onClick={prevSlide}></button>
                    {/* <div className="counter">
                        <span>{current + 1}</span><span>/{slides.length}</span>
                    </div> */}
                    <button className="next" aria-label="Next" onClick={nextSlide}></button>
                </nav>
            )}
        </div>
    );
};

export default Slider;
