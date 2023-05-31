import Box from "@/components/Box";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Button className="w-25 p-3 mt-5" onClick={() => router.push("/table")}>
          Assembler
        </Button>
        <br />
      </div>
    </>
  );
}
