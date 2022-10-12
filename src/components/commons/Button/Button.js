import React from 'react';
import './Button.css';

const Button= ({handleSubmit}) =>{

    return(
        <div>
            <button className="btn-boton"  onClick={handleSubmit}>
                Entrar
            </button>
        </div>
    );
}

export default Button;