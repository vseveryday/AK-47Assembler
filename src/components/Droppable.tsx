import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styles from "@/styles/droppable.module.css";

interface DroppableProps {
  magazineClickedCallback: () => void;
  buttClickedCallback: () => void;
  coverClickedCallback: () => void;
  springClickedCallback: () => void;
  shutterClickedCallback: () => void;
}

export function Droppable(props: any, { magazineClickedCallback, buttClickedCallback, coverClickedCallback, springClickedCallback, shutterClickedCallback }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    // position: "fixed",
    color: isOver ? "green" : undefined,
    // top: "0px",
  };
  const magazineClicked = () => {
    magazineClickedCallback();
  };
  const buttClicked = () => {
    buttClickedCallback();
  };
  const coverClicked = () => {
    coverClickedCallback();
  };
  const springClicked = () => {
    springClickedCallback();
  };
  const shutterClicked = () => {
    shutterClickedCallback();
  };

  return (
    <div className={styles.droppable} ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
