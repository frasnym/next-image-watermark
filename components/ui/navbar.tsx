import type { NextPage } from 'next'
import styled from "styled-components";
import Emoji from './emoji';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-bg-primary-transparent);
`

const SupportBtn = styled.a`
  background-color: #FFF5C0;
  border: 2px solid #FFB396;
  border-radius: 1rem;
  padding: 0.5rem;
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:hover {
    background-color: #FF8585;
    border: 2px solid #FF4646;
    box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 10px;
  }
`

const NavBar: NextPage = () => {
  return (
    <Container>
      Watermark on Image
      <SupportBtn
        href='https://linktr.ee/frasnym'
        target="_blank"
        rel="noreferrer"
      >
        <Emoji symbol='💝' /> Support
      </SupportBtn>
    </Container>
  )
}

export default NavBar
