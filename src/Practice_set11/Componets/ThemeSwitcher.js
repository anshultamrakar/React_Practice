import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext "

const ThemeSwitcher  = () => {
   const {isDark , setIsDark} = useContext(ThemeContext);

    const handleChange = () => {
        setIsDark(!isDark)
    }

    return(
        <div style = {{backgroundColor : !isDark ? "black" : "white"  , color : isDark ? "black" : "white" , minHeight : "100vh"}}>
         <h2>Theme Switcher</h2>
         <p>Current Theme : {isDark ? "light" : "dark"} </p>
         <button onClick={handleChange}>Change Theme !</button>
        </div>
    )
}

export default ThemeSwitcher