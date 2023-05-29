import React from "react";
import { useDraggable } from "@dnd-kit/core";
import styles from "@/styles/draggable.module.css";
import Image from "next/image";
import shutter from "@/assets/shutter.png";

export function DraggableSutter() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggableShutter",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} className="text-center" style={style} {...listeners} {...attributes}>
      <Image src={shutter} width={200} height={100} alt="" />
    </div>
  );
}
