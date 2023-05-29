import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "@/components/Droppable";
import { DraggableSutter } from "@/components/DraggableSutter";
import Image from "next/image";
import box from "@/assets/box.png";
import withZatvor from "@/assets/withZatvor.png";
import withMagazine from "@/assets/withMagazine.png";
import withSpring from "@/assets/withSpring.png";
import withCover from "@/assets/withCover.png";
// import withZatvor from "@/assets/withZatvor.png";
import { DraggableMagazine } from "./DraggableMagazine";
import { DraggableSpring } from "./DraggableSpring";
import { DraggableCover } from "./DraggableCover";
import { Button, Col, Row } from "react-bootstrap";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import router from "next/router";

export default function Box() {
  enum AssemblyStage {
    emptyBox,
    sutter,
    magazine,
    spring,
    cover,
  }
  const [assemblyStage, setAssemblyStage] = useState<AssemblyStage>(AssemblyStage.emptyBox);
  useEffect(() => {
    console.log("assemblyStage", assemblyStage);
    // console.log("isDroppedShutter", isDroppedShutter);
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Droppable>
        {assemblyStage === AssemblyStage.emptyBox && <Image src={box} style={{ maxHeight: "300px", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.sutter && <Image src={withZatvor} style={{ maxHeight: "300px", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.magazine && <Image src={withMagazine} style={{ maxHeight: "300px", width: "auto" }} alt="" />}

        {assemblyStage === AssemblyStage.spring && <Image src={withSpring} style={{ maxHeight: "300px", width: "auto" }} alt="" />}
        {assemblyStage === AssemblyStage.cover && <Image src={withCover} style={{ maxHeight: "300px", width: "auto" }} alt="" />}

        {/* {isDropped ? <Image src={withZatvor} width={800} height={500} alt="" /> : <Image src={box} width={800} height={500} alt="" />}

        {isDropped ? <Image src={withZatvor} width={800} height={500} alt="" /> : <Image src={box} width={800} height={500} alt="" />}

        {isDropped ? <Image src={withZatvor} width={800} height={500} alt="" /> : <Image src={box} width={800} height={500} alt="" />} */}
      </Droppable>
      <Row className="my-5">
        <Col>
          <DraggableSutter />
        </Col>
        <Col>
          <DraggableSpring />
        </Col>
        <Col>
          <DraggableCover />
        </Col>
        <Col>
          <DraggableMagazine />
        </Col>
      </Row>
      {/* <div ref={ref} className="keen-slider" style={{ marginTop: "50px" }}>
        <div className="keen-slider__slide number-slide1">
          <DraggableSutter />
        </div>
        <div className="keen-slider__slide number-slide2">
          <DraggableSpring />
        </div>
        <div className="keen-slider__slide number-slide3">
          <DraggableCover />
        </div>
        <div className="keen-slider__slide number-slide4">
          <DraggableMagazine />
        </div>
      </div> */}

      <div className="text-center">
        <Button className="w-50 p-3 mb-3" variant="light" onClick={() => setAssemblyStage(AssemblyStage.emptyBox)}>
          Сброс
        </Button>
        <br />
        <Button className="w-25 p-3" onClick={() => router.push("/room")}>
          Комната
        </Button>
        <Button className="w-25 p-3" onClick={() => router.push("/")}>
          home
        </Button>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.active && event.active.id === "draggableShutter" && assemblyStage === AssemblyStage.emptyBox) {
      setAssemblyStage(AssemblyStage.sutter);
    }
    if (event.over && event.active && event.active.id === "draggableMagazine" && assemblyStage === AssemblyStage.sutter) {
      setAssemblyStage(AssemblyStage.magazine);
    }
    if (event.over && event.active && event.active.id === "draggableSpring" && assemblyStage === AssemblyStage.magazine) {
      setAssemblyStage(AssemblyStage.spring);
    }
    if (event.over && event.active && event.active.id === "draggableCover" && assemblyStage === AssemblyStage.spring) {
      setAssemblyStage(AssemblyStage.cover);
      alert("Успех!");
    }

    /* else {
      alert("Неправильная последовательность");
    } */
  }
}
