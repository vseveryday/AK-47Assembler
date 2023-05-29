import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DndContext } from "@dnd-kit/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <DndContext>
        <Component {...pageProps} />
      </DndContext>
    </SSRProvider>
  );
}
