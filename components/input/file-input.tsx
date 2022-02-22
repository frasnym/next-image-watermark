import type { NextPage } from 'next'
import { useState } from 'react';
import styled from "styled-components";

type FileInputProps = {
  fileChangeHandler: (file: File) => void,
};

const Container = styled.div`
  display: inline-block;
  width: 100%;
`

const Input = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`

const Label = styled.label`
  display: block;
  position: relative;
  width: 100%;
  min-width: 10rem;
  height: 2.3rem;
  border-radius: .25rem;
  background: black;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform .2s ease-out;

  &:hover {
    transform: scale(1.02);
  }
  &:focus {
    transform: scale(1.02);
  }
`

const FileInput: NextPage<FileInputProps> = ({ fileChangeHandler }) => {
  const [file, setFile] = useState<File>()
  const [label, setLabel] = useState<string>('Select file')

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const targetFiles = e.target.files
    if (!targetFiles) return

    const [newFile]: File[] = Array.prototype.slice.call(targetFiles)
    setFile(newFile)

    fileChangeHandler(newFile)
  }

  return (
    <Container>
      <Input type="file" id='file' onChange={onImageChange} />
      <Label
        htmlFor='file'
        onMouseEnter={() => setLabel(label === 'Select file' ? 'Select file' : 'Change file')}
        onMouseLeave={() => setLabel(file ? file.name : label)}
      >
        {label}
      </Label>
    </Container>

  )
}

export default FileInput
