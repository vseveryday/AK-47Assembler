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
    color: isOver ? "green" : undefined,
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
      {/* <div style={{ position: "absolute", top: "400px", left: "1005px", height: "190px", width: "90px", border: "2px solid transparent" }} onClick={magazineClicked}></div>
      <div style={{ position: "absolute", top: "340px", left: "1225px", height: "150px", width: "360px", border: "2px solid transparent", zIndex: "10000" }} onClick={buttClicked}></div>
      <div style={{ position: "absolute", top: "310px", left: "950px", height: "60px", width: "275px", border: "2px solid transparent", zIndex: "10003" }} onClick={coverClicked}></div>
      <div style={{ position: "absolute", top: "318px", left: "1025px", height: "30px", width: "195px", border: "2px solid transparent", zIndex: "10002" }} onClick={springClicked}></div>
      <div style={{ position: "absolute", top: "318px", left: "950px", height: "50px", width: "115px", border: "2px solid transparent", zIndex: "10001" }} onClick={shutterClicked}></div> */}
    </div>
  );
}
