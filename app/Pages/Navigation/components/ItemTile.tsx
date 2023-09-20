import Link from "next/link";
import styles from "../Style.module.scss";
import IconDetector from "./IconDetector";

interface dataProps{
  title:string;
  adress:string;
}

export default function ItemTile({ data }: { data: dataProps}) {
  return (
    <Link href={data.adress} className={styles.ItemTile}>
      <div className={styles.Icon}>
        <IconDetector data={data.title} />
      </div>
      <div className="flex justify-around">{data.title}</div>
    </Link>
  );
}
