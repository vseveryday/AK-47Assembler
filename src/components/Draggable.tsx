import React from "react";
import { useDraggable } from "@dnd-kit/core";
import styles from "@/styles/draggable.module.css";
import Image from "next/image";

export interface DraggableProps {
  id: string;
  name: string;
  img: any;
}

export function Draggable({ img, id }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} className="text-center" style={style} {...listeners} {...attributes}>
      <Image src={img} width={200} height={200} style={{ width: "auto", height: "auto", maxHeight: 150 }} alt="" />
    </div>
  );
}
