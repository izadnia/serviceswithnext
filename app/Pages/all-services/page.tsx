import React from "react";
import { ServicesData } from "../../utils/ServicesData";
import IconStyle from "./components/IconStyle";

interface dataProps {
  title: string;
  id: string;
  color: string;
  backgroundColor: string;
}

// THIS FUNCTION RENDRES THE ICONS IN ANYWHERE ALONGSIDE THE APP
export function ALLSERVICES({ data }: { data: dataProps[] }) {
  return (
    <div className="flex w-full justify-evenly flex-wrap">
      {data.map((item, index) => (
        <IconStyle
          key={index}
          backgroundColor={item.backgroundColor}
          color={item.color}
          title={item.title}
          id={item.id}
        />
      ))}
    </div>
  );
}

function page() {
  console.log(ServicesData);
  return (
    <div className="flex w-full justify-evenly flex-wrap">
      {ServicesData.map((item) => (
        <IconStyle
          backgroundColor={item.backgroundColor}
          title={item.title}
          id={item.id}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default page;
