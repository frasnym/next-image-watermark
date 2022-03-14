import type { NextPage } from "next";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import HomeCanvas from "../components/home-page/HomeCanvas";
import HomeForm from "../components/home-page/HomeForm";
import DefaultLayout from "../components/layouts/default-layout";

const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
`;

const Home: NextPage = () => {
  const now = new Intl.DateTimeFormat("id-ID").format(new Date());
  const [watermarkText, setWatermarkText] = useState<string>(
    `${now}\nSomething good`
  );
  const [imageName, setImageName] = useState<string>("");
  const [imageType, setImageType] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>();
  const [imageDownloadUrl, setImageDownloadUrl] = useState<string>();

  const canvasProps = {
    imgSrc: imageURL || "",
    watermarkText,
    onCanvasUpdateHandler: useCallback(
      (canvasCtx: CanvasRenderingContext2D) =>
        setImageDownloadUrl(canvasCtx.canvas.toDataURL(imageType)),
      [setImageDownloadUrl, imageType]
    ),
  };

  const homeFormProps = {
    imageName,
    imageDownloadUrl,
    onImageChangeHandler: function (file: File) {
      setImageURL(URL.createObjectURL(file));
      setImageName(file.name);
      setImageType(file.type);
    },
    watermarkText,
    onWatermarkChangeHandler: (text: string) => setWatermarkText(text),
  };

  return (
    <DefaultLayout title="">
      <Container>
        <HomeForm {...homeFormProps} />
        <HomeCanvas {...canvasProps} />
      </Container>
    </DefaultLayout>
  );
};

export default Home;
