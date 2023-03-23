import React from "react";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LenguageContext";
import { AuthProvider } from "../context/AuthContext";

const MyPage = () => {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
            <AuthProvider>
                <HeaderContext/>
                <MainContext/>
            </AuthProvider>
            <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPage;
