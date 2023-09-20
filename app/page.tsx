import React from "react";
import Banner from "./Components/Banner/Banner";
import { BannerData } from "./utils/BannerData";
import { ServicesData } from "./utils/ServicesData";
import styles from "./Style.module.scss";
import Link from "@/node_modules/next/link";
import { ALLSERVICES } from "./Pages/all-services/page";
import PopularServices from "./Components/Services/PopularServices";
import { PopularData } from "./utils/PopularData";

function Container({
  header,
  Title,
  Adress,
  children,
}: {
  header: boolean;
  Title?: string;
  Adress: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.section}>
      {header ? (
        <div className={styles.header}>
          <p className={styles.title}>{Title}</p>
          <Link className={styles.Link} href={Adress}>
            See All
          </Link>
        </div>
      ) : null}
      <div>{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.Homepage}>
      {/* SECTION Profile| Men At Work  */}
      <Container header={false} Adress="" Title="">
        null
      </Container>

      {/* SECTION SEARCH BAR  | Done */}
      <Container header={false} Adress="">
        <input
          className="border-2 rounded-xl bg-gray-200 p-2 w-full"
          placeholder="Search"
          type={"text"}
        ></input>
      </Container>

      {/* SECTION HEADER | Done  */}
      <Container header={true} Adress="./Pages/Offers" Title="Special Offers">
        <Banner data={BannerData[1]} />
      </Container>

      {/* SECTION SERVICES | Done */}
      <Container header={true} Adress="./Pages/all-services" Title="Services">
        <ALLSERVICES data={ServicesData.slice(0, 8)} />
      </Container>

      {/* SECTION POPULAR SERVICES | Done  */}
      <Container header={true} Adress="#" Title="Most Popular Services">
        <PopularServices data={PopularData} />
      </Container>

      <Container header={false} Adress="#" Title="Title">
        
      </Container>
      <Container header={false} Adress="#" Title="Title">
        
      </Container>
      <Container header={false} Adress="#" Title="Title">
        
      </Container>
    </div>
  );
}
