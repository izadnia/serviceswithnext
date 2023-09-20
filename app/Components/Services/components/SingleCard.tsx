import Image from "next/image";
import Link from "next/link";

interface dataProps {
  service: string;
  staff: string;
  price: string;
  views: number;
  image: string;
}

function SingleCard({ data }: { data: dataProps }) {
  return (
    <Link
      href={"#"}
      className="border-[1px] p-1 m-1 w-[20rem] flex rounded-xl justify-between hover:bg-sky-100 cursor-pointer"
    >
      <div className="p-2 ">
        <Image
          className="object-cover rounded-xl"
          src={data.image}
          alt={data.service}
          height={250}
          width={140}
        />
      </div>
      <div className="w=[12rem] flex flex-col m-auto">
        <p className="text-zinc-600 italic">{data.staff}</p>
        <p className="font-semibold">{data.service}</p>
        <p className="text-sky-600 font-bold">{data.price}$</p>
        <p className="text-zinc-600">{data.views} views</p>
      </div>
    </Link>
  );
}

export default SingleCard;
