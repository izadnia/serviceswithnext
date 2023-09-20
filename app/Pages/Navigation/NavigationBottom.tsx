import Link from "next/link";
import ItemTile from "./components/ItemTile";
import styles from "./Style.module.scss";

const Data = [
  {
    title: "Home",
    adress:"./"
  },
  {
    title: "Booking",
    adress:"./Pages/Booking"
  },
  {
    title: "Calender",
    adress:"./Pages/Calender"
  },
  {
    title: "Inbox",
    adress:"./Pages/Inbox"
  },
  {
    title: "Profile",
    adress:"./Pages/Profile"
  },
];

function NavigationBottom({children,}: {children: React.ReactNode;}) {

  return (
    <div className={styles.NavigationBar}>
      <div className={styles.NavigationSection}>
          {Data.map((item,index) => (
            <ItemTile key={index} data={item} />
          ))}
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}

export default NavigationBottom;
