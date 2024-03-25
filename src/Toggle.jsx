import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

const Toggle = () => {

    let {theme, setTheme} = useContext(ThemeContext)
    let myStyle = {
        backgroundColor : theme ? "#fff" : "#203A58",
        color : theme ? "#203A58" : "#fff",
        border : theme ? "1px solid black" : "none"
    }

  return (
    <button style={myStyle} onClick={() => setTheme(!theme)}>{theme ? "Light mode" : "Dark mode"}</button>
  )
}

export default Toggle