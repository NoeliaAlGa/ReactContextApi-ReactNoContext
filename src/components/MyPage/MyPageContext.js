import React from "react";
import FooterContext from "../Footer/FooterContext";
import HeaderContext from "../Header/HeaderContext";
import MainContext from "../Main/MainContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { LanguageProvider } from "../../context/LenguageContext";
import { AuthProvider } from "../../context/AuthContext";

const MyPage = () => {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
            <AuthProvider>
                <HeaderContext/>
                <MainContext/>
                <FooterContext />
            </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPage;
