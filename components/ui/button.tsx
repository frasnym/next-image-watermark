import type { NextPage } from 'next'
import styled from "styled-components";

type ButtonProps = {
  handler: () => void,
  text: string;
};

const Btn = styled.button`
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;

  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover, :active {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;
  }
  &:focus {
    box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
  }
`

const Button: NextPage<ButtonProps> = ({ handler, text }) => {
  return <Btn type="button" onClick={handler}>{text}</Btn>
}

export default Button
