import React from 'react';
import './ItemUser.css';
import UserImage from '../../../assets/images/persona.png'

const ItemUser = ({text}) => {
    return(
        <div className="user-item-container">
            <div className="user-item-message">
                {text.map((t, index)=>
                    <label key={index}>{t}</label>
                )}  
            </div>
            <img src={UserImage} alt=""/>
        </div>
    );
}

export default ItemUser;