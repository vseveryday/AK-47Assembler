import Box from "@/components/Box";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="text-center">
        <Button className="w-25 p-3" onClick={() => router.push("/table")}>
          Assembler
        </Button>
      </div>
    </>
  );
}
