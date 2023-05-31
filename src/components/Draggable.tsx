import React from "react";
import { DragOverlay, useDraggable } from "@dnd-kit/core";
import styles from "@/styles/draggable.module.css";
import Image from "next/image";

export interface DraggableProps {
  id: string;
  name: string;
  child: any;
}

export function Draggable({ child, id }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <>
      <div ref={setNodeRef} className="text-center" style={style} {...listeners} {...attributes}>
        {child}
      </div>
    </>
  );
}
