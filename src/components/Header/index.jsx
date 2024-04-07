import React, { useContext, useState, } from 'react'
import './header.css'

function Header({ handleLanChange }) {
  const [lanValue, setLanValue] = useState('es')

  const [darkMode, setDarkMode] = useState()



  const handleChange = () => {
    setLanValue(prevValue => prevValue === 'es' ? 'en' : 'es');
    handleLanChange(lanValue === 'es' ? 'en' : 'es');
  };


  return (
    <div className={darkMode ? 'dark-header' : 'header'}>
      <div className='header-title'>
        <h1 className='header-title-h1'>
          Luna Lisarazo
        </h1>
        <h3 className='header-title-h3'>
         aver aver 
        </h3>
      </div>
      <div className='header-options'>
        <div className='header-options-section' onClick={() => handleChange()}>
          <img className='header-options-section-img' src="/Wglobe.svg" alt="globe" />
          <span className='header-options-section-span'>{lanValue === 'es' ? 'Esp' : 'Eng'}
          </span>
        </div>
        <div className='header-options-section' onClick={() => setDarkMode(!darkMode)}>
          <img className='header-options-section-img' src={'/Wmoon.svg'} alt="lightMode" />
          <span className='header-options-section-span'>{darkMode ? "" : ""}
          </span>
        </div>
      </div>
      <div className='header-photo'>
        <img className='header-photo-img' src="/Avatar2.png" alt="avatar" />
      </div>
    </div>
  )
}

export default Header