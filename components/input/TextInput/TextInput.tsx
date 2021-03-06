import type { NextPage } from "next";
import styled from "styled-components";

interface TextInputProps {
  onChangeHandler: (text: string) => void;
  value: string;
  type?: "text" | "number";
}

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const TextInput: NextPage<TextInputProps> = function ({
  onChangeHandler,
  value,
  type = "text",
}) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChangeHandler(e.target.value);
  }

  return <Input type={type} value={value} onChange={onChange} />;
};

export default TextInput;
