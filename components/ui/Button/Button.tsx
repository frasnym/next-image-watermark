import type { NextPage } from "next";
import styled from "styled-components";

type ButtonProps = {
  onClickHandler: () => void;
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover,
  :active {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }
`;

const Button: NextPage<ButtonProps> = ({ onClickHandler, text }) => {
  return (
    <Btn type="button" onClick={onClickHandler}>
      {text}
    </Btn>
  );
};

export default Button;
