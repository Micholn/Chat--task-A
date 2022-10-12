import React from 'react';
import './ItemCat.css';
import catImage from '../../../assets/images/gato.jpg';

const ItemCat = ({text}) => {
    return (
        <div className="cat-item-container">
            <img src={catImage} alt=""/>
            <div className="cat-item-message">
                {text.map((t, index) =>
                    <label key={index}>{t}</label>
                )}
            </div>
        </div>
    );
}

export default ItemCat;