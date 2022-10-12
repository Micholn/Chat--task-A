import React from 'react';
import './Text.css';

const Text = ({texto})=>{
    return(
        <div className="container-text">
            <h1>{texto}</h1>
        </div>
    );
}

export default Text;