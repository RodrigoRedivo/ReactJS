import React, { useState } from 'react';
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import ThemeContext from './contexts/theme'

const lightTheme = {
  background: '#dcdcdc',
  backgroundAlt: '#fdfdfd',
  text: '#333',
  border: '#dcdcdc',
  shadow: '0 0 5px rgba(0, 0, 0, .5)',
}

const darkTheme = {
  background: '#000',
  backgroundAlt: '#000',
  text: '#f2f2f2',
  border: '#f2f2f2',
  shadow: '0 0 5px rgba(255, 255, 255, .75)',
}


export default function App() {
  const [theme, updateTheme] = useState(lightTheme, darkTheme)

  function handleLightTheme(e){
    e.preventDefault()

    updateTheme(oldTheme => {
      if(oldTheme.background === '#000'){
        return lightTheme
      } if(oldTheme.background === '#dcdcdc')
        return lightTheme
    })
  }

  function handleDarkTheme(e){
    e.preventDefault()

    updateTheme(oldTheme => {
      if(oldTheme.background === '#dcdcdc'){
        return darkTheme
      } if(oldTheme.background === '#000')
      return darkTheme
    })
  }

  return (
    <ThemeContext.Provider value={{
      lightTheme: handleLightTheme,
      darkTheme: handleDarkTheme
    }}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}