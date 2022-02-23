import type { NextPage } from 'next'
import styled from "styled-components";
import Emoji from './emoji';

const Container = styled.footer`
  width: 100%;
  text-align: right;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: right;
`

const Footer: NextPage = () => {
  return (
    <Container>
      <b>FrasNym &copy; {new Date().getFullYear()}</b>
    </Container>
  )
}

export default Footer
