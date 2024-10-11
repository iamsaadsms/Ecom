import React, { useState } from 'react';
import './Drop.css';

const Drop = ({ head = 'Default Head', info = 'Default Info' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrop = () => {
        setIsOpen(prevState => !prevState);
    };

    console.log('Drop Component - Head:', head, 'Info:', info);

    return (
        <div className="Drop" onClick={toggleDrop}>
            <div className="header">
                <span className="d-head">{head}</span>
                <span className="toggling">
                    {isOpen ? (
                        <i className="bi bi-chevron-up"></i>
                    ) : (
                        <i className="bi bi-chevron-down"></i>
                    )}
                </span>
            </div>
            {isOpen && (
                <div className="info">
                    <span className="d-info">{info}</span>
                </div>
            )}
        </div>
    );
};

export default Drop;
