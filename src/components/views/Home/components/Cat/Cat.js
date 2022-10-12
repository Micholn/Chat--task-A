import React from 'react';
import Lottie from 'react-lottie';
import AnimationCat from './Cat-Data.json';
import './Cat.css';

const Cat= ({history}) => {

    //con el history manejo el redireccionamiento
    function handleOnClick(){
        history.push('./chat');
    }

    //propiedades de la animacion lottie que esta descargada como Cat-Data.json
    const defaultOptions={
        loop: true,
        autoplay: true,
        animationData: AnimationCat
    }
    return(
        <div onClick={handleOnClick} 
         className= 'cat-container'>
            <Lottie
            height={200}
            width={200}
            options={defaultOptions}
            />
        </div>

    );
}

export default Cat;