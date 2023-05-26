"use client";
import { useRef, useState } from "react";
import zatvor from "@/assets/72-2-removebg-preview.png";
import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Text, Image, KonvaNodeComponent, StageProps } from "react-konva";
import useImage from "use-image";

interface URLImage {
  image: any;
}

const URLImage: React.FC<URLImage> = (image) => {
  return (
    <Image
      image={zatvor}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const Test100500 = () => {
  const dragUrl = useRef(null);
  const stageRef = useRef<KonvaNodeComponent<Stage, StageProps>>(null);
  const [images, setImages] = useState([]);
  if (dragUrl.current && stageRef.current) {
    return (
      <div>
        Try to trag and image into the stage:
        <br />
        <img
          alt="lion"
          src="https://konvajs.org/assets/lion.png"
          draggable="true"
          onDragStart={(e) => {
            dragUrl.current = e.target.src;
          }}
        />
        <div
          onDrop={(e) => {
            e.preventDefault();
            // register event position

            stageRef.current.setPointersPositions(e);

            // add image
            setImages(
              images.concat([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl.current,
                },
              ])
            );
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Stage width={window.innerWidth} height={window.innerHeight} style={{ border: "1px solid grey" }} ref={stageRef}>
            <Layer>
              {images.map((image) => {
                return <URLImage image={image} />;
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
};
export default Test100500;
