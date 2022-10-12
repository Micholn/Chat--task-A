import React, { useState } from 'react';
import Cat from './components/Cat/Cat';
import Text from '../../commons/Text/Text';
import Title from '../../commons/Title/Title';
import './Home.css';
import Input from '../../commons/Input/Input';
import Button from '../../commons/Button/Button';

const Home = ({ history }) => {

    const titulo = 'Chat-Bot';
    const texto = 'Clickea sobre mi para chatear';
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [ingreso, setIngreso] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            if (value.length < 6) {
                setPasswordError(true)
            } else {
                setPassword(value)
                setPasswordError(false)
            }
        }
    }

    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            const { user, password } = param
            let acount = JSON.stringify({ user, password });
            localStorage.setItem('account', acount);
            setIngreso(true)
        }
    }

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            ifMatch(account)
        }
    }

    return (
        <div className='home-container'>
            {ingreso &&
                <div>
                    <br/>
                    <Title titulo={titulo} />
                    <Cat history={history} />
                    <Text texto={texto} />
                </div>
            }
            {!ingreso &&
                <div>
                    <br/>
                    <Text texto='Usuario' />
                    <Input
                        attribute={{
                            id: 'usuario',
                            name: 'usuario',
                            type: 'text',
                            placeholder: 'Ingrese su Nombre'
                        }}
                        handleChange={handleChange}
                    />
                    <Text texto='Contraseña' />
                    <Input
                        attribute={{
                            id: 'contraseña',
                            name: 'contraseña',
                            type: 'password',
                            placeholder: 'Ingrese su Contraseña'
                        }}
                        handleChange={handleChange}
                    />
                    <br/>
                    {passwordError &&
                        <label className="label-error">
                            <p>La contraseña debe tener mas letras</p>
                        </label>
                    }
                    <Button handleSubmit={handleSubmit} />
                </div>
            }
        </div>
    );
}

export default Home;