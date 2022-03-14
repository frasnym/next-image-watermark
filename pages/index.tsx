import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Canvas from "../components/canvas";
import HomeForm from "../components/home-page/HomeForm";
import DefaultLayout from "../components/layouts/default-layout";
import { ImageSize } from "../types";

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
  const [imageURL, setImageURL] = useState<string>();
  const [imageSize, setImageSize] = useState<ImageSize>({
    height: 0,
    width: 0,
  });
  const [imageDownloadUrl, setImageDownloadUrl] = useState<string>();

  const homeFormProps = {
    imageName,
    imageDownloadUrl,
    onImageChangeHandler: function (file: File) {
      setImageURL(URL.createObjectURL(file));
      setImageName(file.name);
    },
    watermarkText,
    onWatermarkChangeHandler: (text: string) => setWatermarkText(text),
    imageSize,
    onImageSizeChangeHandler: (imgSize: ImageSize) => setImageSize(imgSize),
  };

  return (
    <DefaultLayout title="">
      <Container>
        <HomeForm {...homeFormProps} />
        <Canvas
          imgSrc={imageURL || ""}
          text={watermarkText}
          updateDownloadHandler={(str: string) => setImageDownloadUrl(str)}
        />
      </Container>
    </DefaultLayout>
  );
};

export default Home;
