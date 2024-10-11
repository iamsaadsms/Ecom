import React from "react";
import './HomeImage.css';
import s2 from '../Media/s2.jpg'
import Button from "../Common/Button";
const HomeImage = () => {
    let homeBtn = {
        position: 'absolute',
        top: '265vh',
        right: '40vw',
        width: '15vw',
        height: '6vh'
    }
    return(
        <div className="HomeImage">
            <img src={s2} className="h-img" alt="HomeImage" />
            <Button data={'SHOP NOW'} style={homeBtn}/>
        </div>
    )
}

export default HomeImage;