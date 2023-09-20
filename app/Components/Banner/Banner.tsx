import Image from "@/node_modules/next/image";
import React from "react";
import styles from "./Style.module.scss";

interface dataProps {
  title: string;
  timeOfOffer: string;
  description: string;
  image: string;
  color: string;
}

function Banner({ data }: { data: dataProps }) {
  return (
    <div className={`${styles.Banner}`}>
      <div className={styles.section}>
        <div className={styles.text}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.timeOfOffer}>{data.timeOfOffer}</p>
          <p className={styles.description}>{data.description}</p>
        </div>
        <div className={styles.image}>
          <Image src={data.image} fill alt="object" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
