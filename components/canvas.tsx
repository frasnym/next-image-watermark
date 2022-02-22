import { NextPage } from "next";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type CanvasProps = {
  text: string,
  imgSrc: string,
  updateDownloadHandler: (str: string) => void
};

const ImageContainer = styled.div`
  display: none;
`

const CanvasContainer = styled.canvas`
  margin: 10px;
  border-radius: 10px;
`

const ImagePreviewContainer = styled.div`
  border: 2px solid black;
  margin: 1rem auto;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageOriginalContainer = styled.div`
  // display: none;
`

const Canvas: NextPage<CanvasProps> = ({ text, imgSrc, updateDownloadHandler }) => {
  const canvasPreviewRef = useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;
  const canvasOriginalRef = useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;
  const img = useRef<HTMLImageElement>() as React.MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    const ctxPreview = canvasPreviewRef.current.getContext("2d");
    const ctxOriginal = canvasOriginalRef.current.getContext("2d");
    if (!ctxPreview || !ctxOriginal) return

    img.current.onload = () => {
      handleResize()
    }

    const handleResize = () => {
      ctxPreview.canvas.height = window.innerHeight - 400;
      ctxPreview.canvas.width = window.innerWidth - 50;
      draw(ctxPreview)

      ctxOriginal.canvas.height = img.current.height;
      ctxOriginal.canvas.width = img.current.width;
      draw(ctxOriginal)
      updateDownloadHandler(ctxOriginal.canvas.toDataURL("image/jpeg"))
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [text, imgSrc])

  function draw(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img.current, 0, 0, img.current.width, img.current.height,     // source rectangle
      0, 0, canvas.width, canvas.height); // destination rectangle
    ctx.font = `${(canvas.width + canvas.height) / 20}px sans-serif`;
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.textAlign = "center";
    const lineheight = (canvas.width + canvas.height) / 20;
    const lines = text.split('\n');

    const divider = 2.0 + (lines.length * (lineheight) / 1000)
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], canvas.width / 2, (canvas.height / divider) + (i * lineheight));
    }
  }

  return (
    <>
      <ImagePreviewContainer>
        <CanvasContainer ref={canvasPreviewRef} />
      </ImagePreviewContainer>
      <ImageOriginalContainer>
        <CanvasContainer ref={canvasOriginalRef} />
      </ImageOriginalContainer>
      <ImageContainer>
        <img
          ref={img}
          alt="Selected Image"
          src={imgSrc}
        />
      </ImageContainer>
    </>
  )
}

export default Canvas