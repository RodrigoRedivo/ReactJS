import React, { useContext } from 'react'

import Container from '../components/Container'
import Title from '../components/Title'
import Button from '../components/Button'
import Input from '../components/Input'

import ThemeContext from '../contexts/theme'

export default function Home() {
  const { lightTheme, darkTheme } = useContext(ThemeContext)

  return (
    <Container>
      <Title>Dark-Mode com Styled Components</Title>
      <Input></Input>
      <Button onClick={lightTheme}>
        LightMode
      </Button>
      <Button onClick={darkTheme}>
        DarkMode
      </Button>
    </Container>
  );
}