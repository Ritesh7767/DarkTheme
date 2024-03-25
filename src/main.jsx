import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ThemeContextProvider from './ThemeContext.jsx'
import UserContextProvider from './UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </ThemeContextProvider>
)
