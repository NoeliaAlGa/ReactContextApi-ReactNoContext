import { createContext, useState } from "react";
 
const ThemeContext = createContext();
const initialTheme = "light";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialTheme);
    const [themePrincipal, setThemePrincipal] = useState("my-page");

    const handleTheme = (e) => {
        if (e.target.value === "light") {
          setTheme("light");
          setThemePrincipal("my-page");
        } else {
          setTheme("dark");
          setThemePrincipal("my-page-dark");
        }
      };
    const data = {theme, handleTheme}
return(
    <ThemeContext.Provider value={data}>
      <div className={themePrincipal}>
        {children}
      </div>
    </ThemeContext.Provider>
)
}
export {ThemeProvider};
export default ThemeContext;