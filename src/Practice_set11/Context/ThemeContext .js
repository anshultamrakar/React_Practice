import { createContext , useState } from "react";

export const ThemeContext = createContext();


const ThemeProvider = ({children}) => {
 const [isDark , setIsDark] = useState(false)
 return(
    <ThemeContext.Provider value = {{isDark , setIsDark }} >
        {children}
    </ThemeContext.Provider>
 )
}

export default ThemeProvider