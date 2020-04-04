import { createContext } from 'react'

const ThemeContext = createContext({
  lightTheme: () => {},
  darkTheme: () => {}
})

export default ThemeContext