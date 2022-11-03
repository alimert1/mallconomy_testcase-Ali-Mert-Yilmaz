import Link from "next/link";
import React from "react";
import styles from "../../styles/TestCaseDetail.module.scss";
import Header from "../../components/Header";
import Image from "next/image";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Head from "next/head";


const cong = () => {
  const { selectedPoint } = useContext(AppContext);

  return (
    <div className={styles.testCaseDetail}>
      <Head>
        <title>Ali Mert Yilmaz | Congratulations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.wrapperInner}>
          <Image
            src="/image/vector.png"
            alt="Congratulations"
            width={72}
            height={50.551}
          />

          <div className={styles.infoDiv}>
            <h3>Congratulations!</h3>
            <p>
              You've earned
              <span className={styles.point}> {selectedPoint} </span> points for
              your participation! Keep Up the great work!
            </p>
          </div>
          <Link href="/home/">
            <button>Close</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cong;
