import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import router from "next/router";
import Image from "next/image";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "@/components/Droppable";
import { Draggable } from "@/components/Draggable";

import zero from "@/assets/AK47/empty.png";
import first from "@/assets/AK47/shutter.png";
import second from "@/assets/AK47/shutterSpring.png";
import third from "@/assets/AK47/shutterSpringCover.png";
import fourth from "@/assets/AK47/shutterSpringCoverMagazine.png";
import fifth from "@/assets/AK47/fullAssembled.png";

import magazine from "@/assets/Details/magazineDetail.png";
import shutter from "@/assets/Details/shutterDetail.png";
import spring from "@/assets/Details/springDetail.png";
import cover from "@/assets/Details/сoverDetail.png";
import butt from "@/assets/Details/buttDetail.png";

export let details = [
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
    butt,
  }
  const [arr, setArr] = useState<any[]>([]);
  const [assemblyStage, setAssemblyStage] = useState<AssemblyStage>(AssemblyStage.empty);

  useEffect(() => {
    // console.log("assemblyStage", assemblyStage);
    console.log(arr);
    setArr(details);
  }, []);

  console.log(arr);
  const onReload = () => {
    setAssemblyStage(AssemblyStage.empty);
    setArr(details);
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Droppable>
        {assemblyStage === AssemblyStage.empty && <Image src={zero} style={{ height: "auto", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.sutter && <Image src={first} style={{ height: "auto", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.spring && <Image src={second} style={{ height: "auto", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.cover && <Image src={third} style={{ height: "auto", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.magazine && <Image src={fourth} style={{ height: "auto", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.butt && <Image src={fifth} style={{ height: "auto", width: "auto" }} alt="" onClick={onReload} />}
      </Droppable>
      <Row className="my-5">
        {arr.map((item) => (
          <Col key={item.id}>
            <Draggable {...item} />
          </Col>
        ))}
      </Row>

      <div className="text-center">
        <Button className="w-50 p-2 mb-3" variant="light" onClick={onReload}>
          Сброс
        </Button>
        <br />
        <Row>
          <Col>
            <Button className="w-25 p-2" onClick={() => router.push("/room")}>
              Комната
            </Button>
          </Col>
          <Col>
            {" "}
            <Button className="w-25 p-2" onClick={() => router.push("/")}>
              home
            </Button>
          </Col>
        </Row>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === "droppable" && event.active && event.active.id === "draggableShutter" && assemblyStage === AssemblyStage.empty) {
      setAssemblyStage(AssemblyStage.sutter);
      setArr(arr.filter((item) => item.id !== "draggableShutter"));
    }
    if (event.over && event.over.id === "droppable" && event.active && event.active.id === "draggableSpring" && assemblyStage === AssemblyStage.sutter) {
      setAssemblyStage(AssemblyStage.spring);
      setArr(arr.filter((item) => item.id !== "draggableSpring"));
    }
    if (event.over && event.over.id === "droppable" && event.active && event.active.id === "draggableCover" && assemblyStage === AssemblyStage.spring) {
      setAssemblyStage(AssemblyStage.cover);
      setArr(arr.filter((item) => item.id !== "draggableCover"));
    }
    if (event.over && event.over.id === "droppable" && event.active && event.active.id === "draggableMagazine" && assemblyStage === AssemblyStage.cover) {
      setAssemblyStage(AssemblyStage.magazine);
      setArr(arr.filter((item) => item.id !== "draggableMagazine"));
    }
    if (event.over && event.over.id === "droppable" && event.active && event.active.id === "draggableButt" && assemblyStage === AssemblyStage.magazine) {
      setAssemblyStage(AssemblyStage.butt);
      setArr(arr.filter((item) => item.id !== "draggableButt"));

      alert("Успех!");
    } /* else if (event.over && event.active && event.active.id !== "draggableMagazine" && assemblyStage !== AssemblyStage.butt) {
      alert("чет не то");
    } */
    /* else {
      alert("Неправильная последовательность");
    } */
  }
}
