import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import router from "next/router";
import Image from "next/image";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToVerticalAxis, restrictToWindowEdges } from "@dnd-kit/modifiers";

import { Droppable } from "@/components/Droppable";
import { Draggable } from "@/components/Draggable";

import empty from "@/assets/AK47/empty.png";
import shutterSpring from "@/assets/AK47/shutterSpring.png";
import shutterSpringCoverMagazine from "@/assets/AK47/shutterSpringCoverMagazine.png";
import shutterSpringCoverButt from "@/assets/AK47/shutterSpringCoverButt.png";
import shutterSpringMagazineButt from "@/assets/AK47/shutterSpringMagazineButt.png";
import fullAssembled from "@/assets/AK47/fullAssembled.png";
import onlyMagazine from "@/assets/AK47/magazine.png";
import onlyButt from "@/assets/AK47/butt.png";
import onlyShutter from "@/assets/AK47/shutter.png";
import magazineButt from "@/assets/AK47/magazineButt.png";
import shutterMagazine from "@/assets/AK47/shutterMagazine.png";
import shutterButt from "@/assets/AK47/shutterButt.png";
import shutterMagazineButt from "@/assets/AK47/shutterMagazineButt.png";
import shutterSpringCover from "@/assets/AK47/shutterSpringCover.png";
import shutterSpringMagazine from "@/assets/AK47/shutterSpringMagazine.png";
import shutterSpringButt from "@/assets/AK47/shutterSpringButt.png";

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

export default function AssemblyTable() {
  enum AssemblyStage {
    empty,
    one,
    two,
    three,
    fourthfive,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
  }
  const [det, setDet] = useState<string[]>([]);
  const [activeId, setActiveId] = useState(null);
  const [arr, setArr] = useState<any[]>([]);
  const [assemblyStage, setAssemblyStage] = useState<AssemblyStage>(AssemblyStage.empty);
  console.log(arr);
  console.log("det", det);

  useEffect(() => {
    setArr(details);
  }, []);

  const onReload = () => {
    setDet([]);
    setArr(details);
  };
  const magazineClicked = () => {
    setDet(det.filter((item) => item !== "draggableMagazine"));
    if (arr.find((item) => item.id === "draggableMagazine")) {
      return;
    } else {
      arr.push({ id: "draggableMagazine", name: "magazine", img: magazine });
    }
  };
  const buttClicked = () => {
    setDet(det.filter((item) => item !== "draggableButt"));
    if (arr.find((item) => item.id === "draggableButt")) {
      return;
    } else {
      arr.push({ id: "draggableButt", name: "butt", img: butt });
    }
  };
  const coverClicked = (e: any) => {
    // e.style.zIndex(10000);
    setDet(det.filter((item) => item !== "draggableCover"));
    if (arr.find((item) => item.id === "draggableCover")) {
      return;
    } else {
      arr.push({ id: "draggableCover", name: "cover", img: cover });
    }
  };
  const springClicked = (e: any) => {
    if (det.find((item) => item === "draggableCover")) {
      return;
    } else {
      setDet(det.filter((item) => item !== "draggableSpring"));
    }
    if (arr.find((item) => item.id === "draggableSpring")) {
      return;
    } else {
      arr.push({ id: "draggableSpring", name: "spring", img: spring });
    }
  };
  const shutterClicked = () => {
    if (det.find((item) => item === "draggableSpring")) {
      return;
    } else {
      setDet(det.filter((item) => item !== "draggableShutter"));
    }
    if (arr.find((item) => item.id === "draggableShutter")) {
      return;
    } else {
      arr.push({ id: "draggableShutter", name: "shutter", img: shutter });
    }
  };
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Droppable>
        {det.length === 0 && <Image src={empty} alt="" />}
        {det.length === 1 && det.includes("draggableMagazine") && <Image src={onlyMagazine} alt="" />}
        {det.length === 1 && det.includes("draggableButt") && <Image src={onlyButt} alt="" />}
        {det.length === 1 && det.includes("draggableShutter") && <Image src={onlyShutter} alt="" />}

        {det.length === 2 && det.includes("draggableShutter") && det.includes("draggableSpring") && <Image src={shutterSpring} alt="" />}
        {det.length === 2 && det.includes("draggableMagazine") && det.includes("draggableButt") && <Image src={magazineButt} alt="" />}
        {det.length === 2 && det.includes("draggableShutter") && det.includes("draggableMagazine") && <Image src={shutterMagazine} alt="" />}
        {det.length === 2 && det.includes("draggableShutter") && det.includes("draggableButt") && <Image src={shutterButt} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableButt") && <Image src={shutterSpringButt} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableMagazine") && <Image src={shutterSpringMagazine} alt="" />}

        {det.length === 3 && det.includes("draggableCover") && det.includes("draggableSpring") && det.includes("draggableMagazine") && <Image src={onlyMagazine} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableMagazine") && det.includes("draggableButt") && <Image src={shutterMagazineButt} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableCover") && <Image src={shutterSpringCover} alt="" />}

        {det.length === 4 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableCover") && det.includes("draggableButt") && (
          <Image src={shutterSpringCoverButt} alt="" />
        )}

        {det.length === 4 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableCover") && det.includes("draggableMagazine") && (
          <Image src={shutterSpringCoverMagazine} alt="" />
        )}

        {det.length === 4 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableMagazine") && det.includes("draggableButt") && (
          <Image src={shutterSpringMagazineButt} alt="" />
        )}
        {det.length === 5 && <Image src={fullAssembled} alt="" />}
      </Droppable>
      <div style={{ position: "absolute", top: "0", width: "1280px", height: "720px" }}>
        <div style={{ position: "relative", width: "1280px", height: "720px" }}>
          <div
            style={{ position: "absolute", top: "380px", left: "700px", height: "190px", width: "90px", border: "0px solid transparent", zIndex: "10000", cursor: "pointer" }}
            onClick={magazineClicked}
          ></div>
          <div
            style={{ position: "absolute", top: "320px", left: "915px", height: "150px", width: "360px", border: "0px solid transparent", zIndex: "10000", cursor: "pointer" }}
            onClick={buttClicked}
          ></div>
          <div
            style={{ position: "absolute", top: "335px", left: "740px", height: "25px", width: "170px", border: "0px solid transparent", zIndex: "10003", cursor: "pointer" }}
            onClick={coverClicked}
          ></div>
          <div
            style={{ position: "absolute", top: "310px", left: "740px", height: "25px", width: "170px", border: "0px solid transparent", zIndex: "10002", cursor: "pointer" }}
            onClick={springClicked}
          ></div>
          <div
            style={{ position: "absolute", top: "310px", left: "641px", height: "50px", width: "100px", border: "0px solid transparent", zIndex: "10001", cursor: "pointer" }}
            onClick={shutterClicked}
          ></div>
        </div>
      </div>
      <Row className="my-5 align-items-center">
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
      {/* <div className="text-center">
        <Button onClick={onReload} size={"lg"}>
          onReload
        </Button>
      </div> */}
    </DndContext>
  );

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: any) {
    setActiveId(null);
    const { over } = event;
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableMagazine") {
      det.push(event.active.id);
      setArr(arr.filter((item) => item.id !== event.active.id));
    }
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableButt") {
      det.push(event.active.id);
      setArr(arr.filter((item) => item.id !== event.active.id));
    }
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableShutter") {
      det.push(event.active.id);
      setArr(arr.filter((item) => item.id !== event.active.id));
    }
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableSpring") {
      if (det.includes("draggableShutter")) {
        det.push(event.active.id);
        setArr(arr.filter((item) => item.id !== event.active.id));
      }
    }
    if (over && over.id === "droppable" && event.active && event.active.id === "draggableCover") {
      if (det.includes("draggableSpring")) {
        det.push(event.active.id);
        setArr(arr.filter((item) => item.id !== event.active.id));
      }
    }
  }
}
