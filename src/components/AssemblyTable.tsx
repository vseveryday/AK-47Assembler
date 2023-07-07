import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { DndContext } from "@dnd-kit/core";
import styles from "@/styles/AssemblyTable.module.css";

import { Droppable } from "@/components/Droppable";
import { Draggable } from "@/components/Draggable";

import empty from "@/assets/AK47/empty.webp";
import shutterSpring from "@/assets/AK47/shutterSpring.webp";
import shutterSpringCoverMagazine from "@/assets/AK47/shutterSpringCoverMagazine.webp";
import shutterSpringCoverButt from "@/assets/AK47/shutterSpringCoverButt.webp";
import shutterSpringMagazineButt from "@/assets/AK47/shutterSpringMagazineButt.webp";
import fullAssembled from "@/assets/AK47/fullAssembled.webp";
import onlyMagazine from "@/assets/AK47/magazine.webp";
import onlyButt from "@/assets/AK47/butt.webp";
import onlyShutter from "@/assets/AK47/shutter.webp";
import magazineButt from "@/assets/AK47/magazineButt.webp";
import shutterMagazine from "@/assets/AK47/shutterMagazine.webp";
import shutterButt from "@/assets/AK47/shutterButt.webp";
import shutterMagazineButt from "@/assets/AK47/shutterMagazineButt.webp";
import shutterSpringCover from "@/assets/AK47/shutterSpringCover.webp";
import shutterSpringMagazine from "@/assets/AK47/shutterSpringMagazine.webp";
import shutterSpringButt from "@/assets/AK47/shutterSpringButt.webp";

import magazine from "@/assets/Details/magazineNew.png";
import shutter from "@/assets/Details/shutterDetail.webp";
import spring from "@/assets/Details/springDetail.webp";
import cover from "@/assets/Details/сoverDetail.webp";
import butt from "@/assets/Details/buttDetail.webp";

export const details = [
  { id: "draggableMagazine", name: "magazine", img: magazine },
  { id: "draggableShutter", name: "shutter", img: shutter },
  { id: "draggableSpring", name: "spring", img: spring },
  { id: "draggableCover", name: "cover", img: cover },
  { id: "draggableButt", name: "butt", img: butt },
];

export default function AssemblyTable() {
  const [det, setDet] = useState<string[]>([]);
  const [activeId, setActiveId] = useState(null);
  const [arr, setArr] = useState<any[]>([]);
  // console.log(arr);
  // console.log("det", det);

  useEffect(() => {
    setArr(details);
  }, []);

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
        {det.length === 1 && det.includes("draggableMagazine") && <Image priority src={onlyMagazine} alt="" />}
        {det.length === 1 && det.includes("draggableButt") && <Image priority src={onlyButt} alt="" />}
        {det.length === 1 && det.includes("draggableShutter") && <Image priority src={onlyShutter} alt="" />}

        {det.length === 2 && det.includes("draggableShutter") && det.includes("draggableSpring") && <Image priority src={shutterSpring} alt="" />}
        {det.length === 2 && det.includes("draggableMagazine") && det.includes("draggableButt") && <Image priority src={magazineButt} alt="" />}
        {det.length === 2 && det.includes("draggableShutter") && det.includes("draggableMagazine") && <Image priority src={shutterMagazine} alt="" />}
        {det.length === 2 && det.includes("draggableShutter") && det.includes("draggableButt") && <Image priority src={shutterButt} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableButt") && <Image priority src={shutterSpringButt} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableMagazine") && <Image priority src={shutterSpringMagazine} alt="" />}

        {det.length === 3 && det.includes("draggableCover") && det.includes("draggableSpring") && det.includes("draggableMagazine") && <Image priority src={onlyMagazine} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableMagazine") && det.includes("draggableButt") && <Image priority src={shutterMagazineButt} alt="" />}

        {det.length === 3 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableCover") && <Image priority src={shutterSpringCover} alt="" />}

        {det.length === 4 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableCover") && det.includes("draggableButt") && (
          <Image priority src={shutterSpringCoverButt} alt="" />
        )}

        {det.length === 4 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableCover") && det.includes("draggableMagazine") && (
          <Image priority src={shutterSpringCoverMagazine} alt="" />
        )}

        {det.length === 4 && det.includes("draggableShutter") && det.includes("draggableSpring") && det.includes("draggableMagazine") && det.includes("draggableButt") && (
          <Image priority src={shutterSpringMagazineButt} alt="" />
        )}
        {det.length === 5 && <Image priority src={fullAssembled} alt="" />}
        <div className={styles.sticky_field}>
          <div className={styles.wrapper}>
            <div className={styles.complete_magazine} onClick={magazineClicked}></div>
            <div className={styles.complete_butt} onClick={buttClicked}></div>
            <div className={styles.complete_cover} onClick={coverClicked}></div>
            <div className={styles.complete_spring} onClick={springClicked}></div>
            <div className={styles.complete_shutter} onClick={shutterClicked}></div>
          </div>
        </div>
      </Droppable>

      <div className={styles.details_list}>
        {arr.map((item) => (
          <div key={item.id} className={styles.detail_wrapper}>
            <Draggable id={item.id} name={item.name} child={<Image src={item.img} className={styles.detail} alt={item.name} />} />
          </div>
        ))}
      </div>
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
