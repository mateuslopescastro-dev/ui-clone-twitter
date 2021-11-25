import React from 'react'

import { Main } from '../components/Main'
import { Container, Wrapper } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
  )
}

export default Home
