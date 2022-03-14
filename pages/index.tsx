import type { NextPage } from 'next'
import React, { useState } from 'react'
import styled from 'styled-components'
import Canvas from '../components/canvas'
import FileInput from '../components/input/file-input'
import TextAreaInput from '../components/input/textarea-input'
import DefaultLayout from '../components/layouts/default-layout'
import Button from '../components/ui/Button'

const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
`

const FormContainer = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  padding: 10px;
  background: white;
`

const FormInput = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  width: 100%;
  @media (max-width: 425px) {
    display: block;
  }
`

const FormGroup = styled.div`
  text-align: left;
  padding: 1rem;
  flex: 1;
  & > label {
    display: block;
    padding-bottom: 0.5rem;
  }
`

const FormFooter = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: right;
  & button {
    margin-left: 1rem;
  }
`

const Home: NextPage = () => {
  const now = new Intl.DateTimeFormat('id-ID').format(new Date())
  const [watermarkText, setWatermarkText] = useState<string>(`${now}\nSomething good`)
  const [fileName, setFileName] = useState<string>("")
  const [imageURL, setImageURL] = useState<string>()
  const [dlOriginal, setDlOriginal] = useState<string>()

  function fileChangeHandler(file: File) {
    setImageURL(URL.createObjectURL(file))
    setFileName(file.name)
  }

  function textChangeHandler(text: string) {
    setWatermarkText(text)
  }

  function downloadOriginal() {
    if (!dlOriginal) return

    const link = document.createElement('a');
    link.download = fileName;
    link.href = dlOriginal;
    link.click();
  }

  const Form = <FormContainer>
    <FormInput>
      <FormGroup>
        <label>Image File</label>
        <FileInput fileChangeHandler={fileChangeHandler} />
      </FormGroup>
      <FormGroup>
        <label>Watermark Text</label>
        <TextAreaInput
          textChangeHandler={textChangeHandler}
          defaultText={watermarkText} />
      </FormGroup>
    </FormInput>
    <FormFooter>
      <hr />
      <Button text='Download' onClickHandler={downloadOriginal} />
    </FormFooter>
  </FormContainer>

  return (
    <DefaultLayout title=''>
      <Container>
        {Form}
        <Canvas imgSrc={imageURL || ''} text={watermarkText} updateDownloadHandler={(str: string) => setDlOriginal(str)} />
      </Container>
    </DefaultLayout>
  )
}

export default Home
