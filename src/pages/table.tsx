import AssemblyTable from "@/components/AssemblyTable";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/table.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>table</title>
      </Head>
      <div className={styles.table}>
        <AssemblyTable />
      </div>
    </>
  );
}
