"use client";

import React from "react";
import SingleCard from "./components/SingleCard";
import Categories from "./components/Categories";
import { useSearchParams } from "next/navigation";

interface dataProps {
  category: string;
  services: {
    service: string;
    staff: string;
    price: string;
    views: number;
    image: string;
  }[];
}
[];

function PopularServices({ data }: { data: dataProps[] }) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  return (
    <div>
      <Categories data={data} />
      <div className="mt-2 flex flex-wrap justify-evenly ">
        {selectedCategory != null
          ? data
              .filter((item) => item.category == selectedCategory)
              .map((item) =>
                item.services.map((e, index) => (
                  <SingleCard key={index} data={e} />
                ))
              )
          : data.map((item) =>
              item.services.map((e, index) => (
                <SingleCard key={index} data={e} />
              ))
            )}
      </div>
    </div>
  );
}

export default PopularServices;
