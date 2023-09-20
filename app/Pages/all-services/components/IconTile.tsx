import Link from "next/link";

export default function IconTile({
    title,
    color,
    children,
    backgroundColor,
  }: {
    title:string;
    backgroundColor: string;
    color: string;
    children: React.ReactNode;
  }) {
    return (
      <Link href={"#"}>
        <div className="m-1 p-1 flex flex-col items-center">
          <div
            style={{ backgroundColor: `${backgroundColor}`, color: `${color}`}}
            className="rounded-full p-4  text-3xl "
          >
            {children}
          </div>
          <div className="text-xs">{title}</div>
        </div>
      </Link>
    );
  }