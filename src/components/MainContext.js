import React from 'react'
import {useContext} from 'react';
import LanguageContext from '../context/LenguageContext';
import ThemeContext from '../context/ThemeContext';
import AuthContext from '../context/AuthContext';

const MainContext = () => {
  const{theme} = useContext(ThemeContext);
  const{texts} = useContext(LanguageContext);
  const{auth} = useContext(AuthContext);
  return (
    <main className={theme}>
        {auth 
            ?<p>{texts.mainHello}</p>
            :<p>{texts.mainWelcome}</p>}
        <p>{texts.mainContent}</p>
    </main>
  )
}

export default MainContext