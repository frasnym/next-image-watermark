import { NextPage } from "next";
import React, { useEffect, useRef } from "react";
import {
  CanvasContainer,
  ImageContainer,
  ImageOriginalContainer,
  ImagePreviewContainer,
} from "./HomeCanvas.style";

interface HomeCanvasProps {
  watermarkText: string;
  imgSrc: string;
  onCanvasUpdateHandler: (imgUrl: string) => void;
}

const HomeCanvas: NextPage<HomeCanvasProps> = ({
  watermarkText,
  imgSrc,
  onCanvasUpdateHandler,
}) => {
  const canvasPreviewRef =
    useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;
  const canvasOriginalRef =
    useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;
  const imgRef =
    useRef<HTMLImageElement>() as React.MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    const ctxPreview = canvasPreviewRef.current.getContext("2d");
    const ctxOriginal = canvasOriginalRef.current.getContext("2d");
    if (!ctxPreview || !ctxOriginal) return;

    const handleResize = () => {
      ctxPreview.canvas.height = window.innerHeight - 400;
      ctxPreview.canvas.width = window.innerWidth - 50;
      draw(ctxPreview, watermarkText, imgRef);

      ctxOriginal.canvas.height = imgRef.current.height;
      ctxOriginal.canvas.width = imgRef.current.width;
      draw(ctxOriginal, watermarkText, imgRef);
      onCanvasUpdateHandler(ctxOriginal.canvas.toDataURL("image/jpeg"));
    };

    imgRef.current.onload = () => handleResize();
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [watermarkText, imgSrc, onCanvasUpdateHandler]);

  return (
    <>
      <ImagePreviewContainer>
        <CanvasContainer ref={canvasPreviewRef} />
      </ImagePreviewContainer>
      <ImageOriginalContainer>
        <CanvasContainer ref={canvasOriginalRef} />
      </ImageOriginalContainer>
      <ImageContainer>
        <img ref={imgRef} alt="Selected Image" src={imgSrc} />
      </ImageContainer>
    </>
  );
};

function draw(
  ctx: CanvasRenderingContext2D,
  watermarkText: string,
  imgRef: React.MutableRefObject<HTMLImageElement>
) {
  const canvas = ctx.canvas;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    imgRef.current,
    0,
    0,
    imgRef.current.width,
    imgRef.current.height, // source rectangle
    0,
    0,
    canvas.width,
    canvas.height
  ); // destination rectangle
  ctx.font = `${(canvas.width + canvas.height) / 20}px sans-serif`;
  ctx.fillStyle = "rgba(247, 247, 247, 0.8)";
  ctx.textAlign = "center";
  const lineHeight = (canvas.width + canvas.height) / 20;
  const lines = watermarkText.split("\n");

  const divider = 2.0 + (lines.length * lineHeight) / 1000;
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(
      lines[i],
      canvas.width / 2,
      canvas.height / divider + i * lineHeight
    );
  }
}

export default HomeCanvas;
