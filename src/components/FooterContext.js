import React from 'react'
import {useContext} from 'react';
import LanguageContext from '../context/LenguageContext';
import ThemeContext from '../context/ThemeContext';

const Footer = () => {
  const{theme} = useContext(ThemeContext);
  const{texts} = useContext(LanguageContext);
  return (
    <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default Footer