import React, {useState} from 'react';
import './Chat.css';
import CatItem from './itemCat/ItemCat';
import UserItem from './ItemUser/ItemUser';
import InputChat from './InputChat/InputChat';

const Chat= ()=>{

    let idCount=0;
    const [message, setMessage] = useState({});
    const [chat, setChat] = useState(
    [{
        id:0,
        emmiter: 'cat',
        mensaje:['hola', 'Que tal?']
    }]);

    function onChangeMessage (value){
        idCount = idCount + 1;
        setMessage({
            id: idCount,
            emmiter: 'user',
            mensaje: [value]
        })
    };

    function onSubmitMessage(e) {
        e.preventDefault();
        setChat([...chat, message])
    };

    console.log(message);
    console.log(chat);

    return(
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {chat.map( (msg, index) => 
                            msg.emmiter === 'cat'?
                                <CatItem key={index} text={msg.mensaje}/>
                                :
                                <UserItem key={index} text={msg.mensaje}/>
                        )}
                    </div>
                    <div className="chatbot-chat-container-input">
                        <InputChat 
                        onChangeMessage={onChangeMessage}
                        onSubmitMessage={onSubmitMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;