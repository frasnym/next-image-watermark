import type { NextPage } from 'next'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Canvas from '../components/canvas'
import FileInput from '../components/input/file-input'
import TextInput from '../components/input/text-input'
import TextAreaInput from '../components/input/textarea-input'
import DefaultLayout from '../components/layouts/default-layout'
import Button from '../components/ui/button'

type ImageSize = {
  width: number,
  height: number,
}

const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
`

const ImageContainer = styled.div`
  width: 50rem;
  display: inline-block;
`

const FormContainer = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  padding: 10px;
`

const FormInput = styled.div`
  display: flex;
  @media (max-width: 425px) {
    display: block;
  }
`

const FormGroup = styled.div`
  text-align: left;
  padding: 1rem;
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

const ImagePreviewContainer = styled.div`
  border: 2px solid black;
  margin: 1rem auto;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Home: NextPage = () => {
  const [watermarkText, setWatermarkText] = useState<string>("FrasNym")
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

  function updateDlOriginal(str: string) {
    setDlOriginal(str)
  }

  function downloadOriginal() {
    if (!dlOriginal) return

    const link = document.createElement('a');
    link.download = fileName;
    link.href = dlOriginal;
    link.click();
  }

  return (
    <DefaultLayout title=''>
      <Container>
        {generateForm()}
        <Canvas imgSrc={imageURL || ''} text={watermarkText} updateDownloadHandler={updateDlOriginal} />
      </Container>
    </DefaultLayout>
  )

  function generateForm() {
    return <FormContainer>
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
        <Button text='Download' handler={downloadOriginal} />
      </FormFooter>
    </FormContainer>
  }
}

export default Home
