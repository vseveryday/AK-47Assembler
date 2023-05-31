import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import router from "next/router";
import Image from "next/image";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToVerticalAxis, restrictToWindowEdges } from "@dnd-kit/modifiers";

import { Droppable } from "@/components/Droppable";
import { Draggable } from "@/components/Draggable";

import zero from "@/assets/AK47/empty.png";
import first from "@/assets/AK47/shutter.png";
import second from "@/assets/AK47/shutterSpring.png";
import third from "@/assets/AK47/shutterSpringCover.png";
import fourth from "@/assets/AK47/shutterSpringCoverMagazine.png";
import end from "@/assets/AK47/fullAssembled.png";

import magazine from "@/assets/Details/magazineDetail.png";
import shutter from "@/assets/Details/shutterDetail.png";
import spring from "@/assets/Details/springDetail.png";
import cover from "@/assets/Details/сoverDetail.png";
import butt from "@/assets/Details/buttDetail.png";

export const details = [
  { id: "draggableMagazine", name: "magazine", img: magazine },
  { id: "draggableShutter", name: "shutter", img: shutter },
  { id: "draggableSpring", name: "spring", img: spring },
  { id: "draggableCover", name: "cover", img: cover },
  { id: "draggableButt", name: "butt", img: butt },
];

export default function Box() {
  enum AssemblyStage {
    empty,
    sutter,
    spring,
    cover,
    magazine,
    end,
  }
  const [activeId, setActiveId] = useState(null);
  const [arr, setArr] = useState<any[]>([]);
  const [assemblyStage, setAssemblyStage] = useState<AssemblyStage>(AssemblyStage.empty);
  const varImg = arr.filter((item) => (item.id === activeId ? item.img : ""));
  console.log("varImg", varImg[0]);

  useEffect(() => {
    setArr(details);
  }, []);

  // console.log(arr);
  const onReload = () => {
    setAssemblyStage(AssemblyStage.empty);
    setArr(details);
  };
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Droppable>
        {assemblyStage === AssemblyStage.empty && <Image src={zero} alt="" />}
        {assemblyStage === AssemblyStage.sutter && <Image src={first} alt="" />}
        {assemblyStage === AssemblyStage.spring && <Image src={second} alt="" />}
        {assemblyStage === AssemblyStage.cover && <Image src={third} alt="" />}
        {assemblyStage === AssemblyStage.magazine && <Image src={fourth} alt="" />}
        {assemblyStage === AssemblyStage.end && <Image src={end} width={1280} height={720} alt="" />}
      </Droppable>
      <Row className="my-5">
        {arr.map((item) => (
          <Col key={item.id}>
            <Draggable
              id={item.id}
              name={item.name}
              child={<Image src={item.img} width={200} height={200} style={{ width: "auto", height: "auto", maxHeight: 150, zIndex: 2000 }} alt={item.name} />}
            />
          </Col>
        ))}
      </Row>
      {/* <Row>
        <Col xs={4}>
          <DragOverlay modifiers={[restrictToWindowEdges]}>
            {activeId ? <Image src={varImg[0].img} width={200} height={200} style={{ width: "auto", height: "auto", maxHeight: 150 }} alt={""} /> : null}
          </DragOverlay>
        </Col>
      </Row> */}
      <div className="text-center">
        <Button className="w-25 p-2 mb-3" variant="light" onClick={onReload}>
          Сброс
        </Button>
      </div>
    </DndContext>
  );

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: any) {
    setActiveId(null);
    const { over } = event;
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableShutter" && assemblyStage === AssemblyStage.empty) {
      setAssemblyStage(AssemblyStage.sutter);
      setArr(arr.filter((item) => item.id !== "draggableShutter"));
    }

    if (over && over.id === "droppable" && event.active && event.active.id === "draggableSpring" && assemblyStage === AssemblyStage.sutter) {
      setAssemblyStage(AssemblyStage.spring);
      setArr(arr.filter((item) => item.id !== "draggableSpring"));
    }
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableCover" && assemblyStage === AssemblyStage.spring) {
      setAssemblyStage(AssemblyStage.cover);
      setArr(arr.filter((item) => item.id !== "draggableCover"));
    }
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableMagazine" && assemblyStage === AssemblyStage.cover) {
      setAssemblyStage(AssemblyStage.magazine);
      setArr(arr.filter((item) => item.id !== "draggableMagazine"));
    }

    if (over && over.id === "droppable" && event.active && event.active.id === "draggableButt" && assemblyStage === AssemblyStage.magazine) {
      setAssemblyStage(AssemblyStage.end);
      setArr(arr.filter((item) => item.id !== "draggableButt"));

      alert("Успех!");
    }
    // if (event.over && event.active && event.active.id !== "draggableMagazine" && assemblyStage !== AssemblyStage.butt) {
    //   alert("чет не то");
    // }
    /* else {
      alert("Неправильная последовательность");
    } */
  }
}
