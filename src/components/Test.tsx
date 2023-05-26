"use client";
import { useState } from "react";
import Image from "next/image";
import zatvor from "@/assets/72-2-removebg-preview.png";
import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Text } from "react-konva";

const Test2 = () => {
  const [isDragging, setDragging] = useState(false);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);

  const onDragEnd = (e: { target: { x: number; y: number } }) => {
    setDragging(false);
    setX(e.target.x);
    setY(e.target.y);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Draggable Text" x={x} y={y} draggable fill={isDragging ? "green" : "black"} onDragStart={() => setDragging(true)} onDragEnd={(e) => onDragEnd} />
      </Layer>
    </Stage>
  );
};
export default Test2;
