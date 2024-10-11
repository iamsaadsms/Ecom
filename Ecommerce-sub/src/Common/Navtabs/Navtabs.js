import React from "react";
import { Link } from 'react-router-dom';
import './Navtabs.css';

const Navtabs = () => {
    const tabs = [
        { title: "Home", link: "/" },
        { title: "New Arrivals", link: "/new-arrivals" },
        {
            title: {
                drop: "Products",
                items: ["Oil", "Brushes", "Polish", "Paint"]
            },
            link: "/products"
        },
        { title: "Sale", link: "/sale" }
    ];

    return (
        <div className="Navtabs">
            {tabs.map((tab, index) => (
                <div className="tab" key={index}>
                    {typeof tab.title === "string" ? (
                        <Link to={tab.link} className="nav-tab">
                            {tab.title}
                        </Link>
                    ) : (
                        <div className="dropdown">
                            <span className="nav-tab dropdown-title">{tab.title.drop}</span>
                            <div className="dropdown-content">
                                {tab.title.items.map((item, idx) => (
                                    <span key={idx} className="dropdown-item">{item}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Navtabs;
