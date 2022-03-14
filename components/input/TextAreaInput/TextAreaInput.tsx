import type { NextPage } from "next";
import styled from "styled-components";

interface TextAreaInputProps {
  onChangeHandler: (text: string) => void;
  value: string;
}

const TextArea = styled.textarea`
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

const TextAreaInput: NextPage<TextAreaInputProps> = function ({
  onChangeHandler,
  value,
}) {
  function onTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChangeHandler(e.target.value);
  }

  return <TextArea value={value} onChange={onTextChange} />;
};

export default TextAreaInput;
