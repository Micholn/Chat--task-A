import React from 'react';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    //no se pone cada view aca (Home, Chat) se pone el Routes que contiene 
    //las rutas a esas views
    <div className="App">     
        <Routes />
    </div>
  );
}

export default App;
