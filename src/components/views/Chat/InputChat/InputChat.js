import React from 'react';
import './InputChat.css';

const InputChat= ({onChangeMessage, onSubmitMessage}) => {
    return(
            <form
                onSubmit={(e) => onSubmitMessage(e)}
                className="chatbot-chat-input-container">
                <input
                placeholder="Escribi tu nombre"
                type="text"
                onChange={(e) => onChangeMessage(e.target.value)}
                />
                <button
                type="submit"
                />
            </form>
    )
}

export default InputChat;
