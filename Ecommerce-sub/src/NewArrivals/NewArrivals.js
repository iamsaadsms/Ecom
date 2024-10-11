import React, { useState, useEffect } from 'react';
import Filter from '../Common/Filter';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Articles from '../Common/Articles';
import './NewArrivals.css';
import NArrivals from '../JSON/NewArrivals.json';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg)$/));

const NewArrivals = () => {
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        const itemsArray = Object.values(NArrivals);

        const itemsWithImages = itemsArray.map(item => ({
            ...item,
            pic: images[item.pic],
            pic2: images[item.pic2]
        }));
        setItems(itemsWithImages);
        setSortedItems(itemsWithImages);
    }, []);

    return(
        <div className="NewArrivals">
            <Navbar />
            <Filter items={items} setSortedItems={setSortedItems} />
            <Articles head="NEW ARRIVALS" articleData={sortedItems} className="sale-style"/>
            <Footer />
        </div>
    )
}

export default NewArrivals;