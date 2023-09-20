"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
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
function Categories({ data }: { data: dataProps[] }) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const router = useRouter();
  function handleClick(data: any) {
    if (data == null) {
      router.push(`?`, { scroll: false });
    } else {
      router.push(`?category=${data}`, { scroll: false });
    }
  }
  function ContainerEL({
    category,
    children,
  }: {
    category: string | null;
    children: React.ReactNode;
  }) {
    return (
      <button
        className={`

        border-[1px]
        border-sky-500
        p-2
        w-[6rem]
        rounded-3xl
        m-2
        flex
        justify-around
      
        ${selectedCategory == category ? "bg-sky-500 text-white" : null}

    `}
        onClick={() => handleClick(category)}
      >
        {children}
      </button>
    );
  }
  return (
    <div className={`flex pb-2 overflow-x-scroll`}>
      <ContainerEL category={null}>ALL</ContainerEL>
      {data.map((item, index) => (
        <ContainerEL key={index} category={item.category}>
          {item.category}
        </ContainerEL>
      ))}
    </div>
  );
}

export default Categories;
