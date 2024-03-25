import { createContext, useContext, useState } from "react";

export let ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    let [theme, setTheme] = useState(false)
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider