import React from 'react'

import { Main } from '../components/Main'
import { MenuBar } from '../components/MenuBar'

import { Container, Wrapper } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
      </Wrapper>
    </Container>
  )
}

export default Home
