import React from "react";
import './Button.css';

const Button = ({data, style, onClick}) => {
    return(
        <div className="Button">
            <button onClick={onClick} className="btn" style={style}>{data}</button>
        </div>
    )
}

export default Button;