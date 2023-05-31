import "bootstrap/dist/css/bootstrap.css";
import { Button, SSRProvider } from "react-bootstrap";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DndContext } from "@dnd-kit/core";
import router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <div style={{ position: "absolute", display: "flex", top: "0%", width: "100%", zIndex: "2000" }}>
        <Button variant="primary" className="w-100 p-2 rounded-0" onClick={() => router.push("/")}>
          home
        </Button>
      </div>
    </SSRProvider>
  );
}
