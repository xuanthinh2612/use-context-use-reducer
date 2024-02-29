import {createContext, useState } from 'react';
import Content from './Content';
import React from 'react';



// 
// Context
// 
// CompA => CompB => CompC
// 
// 
// 1. Create context
// 2. Provider
// 3. consumer
// 
// 
// 

const ThemeContext = createContext()

function ThemeProvider({children}) {

    const [theme, setTheme] = useState("light")

    const handleToggle = ()=> {
      let themeResult =  theme === "light" ? "dark" : "light"
      setTheme(themeResult)
    }

    const obValue = {
        theme,
        handleToggle
    }
  
    return (
        <ThemeContext.Provider value={obValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider}