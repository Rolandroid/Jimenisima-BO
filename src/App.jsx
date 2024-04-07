import React, { useState } from 'react';
import './App.css'


function App() {
  return (
    <div className='app'>

      <div className='app-login'>
        <h1 className='app-login-h1' >Jimenisima</h1>
        <h4 className='app-login-h4'>Tienda creativa</h4>
        <form className='app-login-form' action="">
          <input className='app-login-form-input' type="text" />
          <input className='app-login-form-input' type="password" />
          <button className='app-login-form-button' type='submit' >Login</button>
        </form>
      </div>




    </div>
  );
}

export default App;