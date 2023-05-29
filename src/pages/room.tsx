import Box from "@/components/Box";
import Head from "next/head";

import styles from "@/styles/room.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Page2() {
  return (
    <>
      <Head>
        <title>Page2</title>
      </Head>
      <div className={styles.room}>
        <Link href="/table" style={{ position: "absolute", color: "black", zIndex: "1000", display: "flex", justifyContent: "center", alignContent: "center" }}>
          <h1>К сборочному столу</h1>
        </Link>
      </div>
    </>
  );
}
