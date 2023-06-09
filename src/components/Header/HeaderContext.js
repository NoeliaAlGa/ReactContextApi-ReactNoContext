import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LanguageContext from "../../context/LenguageContext";
import ThemeContext from "../../context/ThemeContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLenguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitule}</h3>
      <select name="lenguage" onChange={handleLenguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      ></input>
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      ></input>
      <label htmlFor="dark">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;
