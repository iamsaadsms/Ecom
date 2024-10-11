import React, { useState, useEffect } from 'react';
import Filter from '../Common/Filter';
import './Sale.css';
import SaleJson from '../JSON/Sale.json';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Articles from '../Common/Articles';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg)$/));

const Sale = () => {
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        const itemsArray = Object.values(SaleJson);

        const itemsWithImages = itemsArray.map(item => ({
            ...item,
            pic: images[item.pic],
            pic2: images[item.pic2]
        }));
        setItems(itemsWithImages);
        setSortedItems(itemsWithImages);
    }, []);

    return (
        <div className="Sale">
            <Navbar />
            <Filter items={items} setSortedItems={setSortedItems} />
            <Articles head="SALE" articleData={sortedItems} className="sale-style"/>
            <Footer />
        </div>
    );
};

export default Sale;
