import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styles from "@/styles/droppable.module.css";

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div className={styles.droppable} ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
