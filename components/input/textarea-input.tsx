import type { NextPage } from 'next'
import { useState } from 'react';
import styled from "styled-components";

type TextAreaInputProps = {
  textChangeHandler: (text: string) => void,
  defaultText?: string;
};

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
  }
`

const TextAreaInput: NextPage<TextAreaInputProps> = ({ textChangeHandler, defaultText = '' }) => {
  const [text, setText] = useState<string>(defaultText)

  function onTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value)
    textChangeHandler(e.target.value)
  }

  return <TextArea value={text} onChange={onTextChange} />

}

export default TextAreaInput
