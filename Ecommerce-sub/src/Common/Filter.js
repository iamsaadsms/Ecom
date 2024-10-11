import React from "react";
import './Filter.css';

const Filter = ({ items, setSortedItems }) => {
    const sortItems = (criteria) => {
        let sortedItems = [];
        if (criteria === 'price-low-high') {
            sortedItems = [...items].sort((a, b) => a.price - b.price);
        } else if (criteria === 'price-high-low') {
            sortedItems = [...items].sort((a, b) => b.price - a.price);
        } else if (criteria === 'most-recent') {
            sortedItems = [...items].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }
        setSortedItems(sortedItems);
    };

    return (
        <div className="Filter">
            <span className="sort">SORT BY</span>
            <select onChange={(e) => sortItems(e.target.value)} className="filter-dropdown">
                <option value="" disabled selected>FEATURED</option>
                <option className="options" value="price-low-high">PRICE: LOW TO HIGH</option>
                <option className="options" value="price-high-low">PRICE: HIGH TO LOW</option>
                <option className="options" value="most-recent">MOST RECENT</option>
            </select>
        </div>
    );
};

export default Filter;
