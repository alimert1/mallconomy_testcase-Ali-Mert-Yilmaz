import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import styles from "../styles/Home.module.scss";
import Intro from "./intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ali Mert Yilmaz | intro</title>
      </Head>
      <Intro/>
    </div>
  );
}
