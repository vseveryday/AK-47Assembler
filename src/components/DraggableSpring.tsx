import React from "react";
import { useDraggable } from "@dnd-kit/core";
import styles from "@/styles/draggable.module.css";
import Image from "next/image";
import spring from "@/assets/spring.png";

export function DraggableSpring() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggableSpring",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zTndex: "1000",
      }
    : undefined;
  return (
    <div ref={setNodeRef} className="text-center" style={style} {...listeners} {...attributes}>
      <Image src={spring} width={200} height={100} alt="" />
    </div>
  );
}
