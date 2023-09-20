import styles from "../Style.module.scss";
import {
  MdHome,
  MdMenuBook,
  MdOutlineCalendarMonth,
  MdMessage,
  MdAssignmentInd,
} from "react-icons/md";

export default function IconDetector({ data }: { data: any }) {
  if (data == "Home") {
    return <MdHome />;
  } else if (data == "Booking") {
    return <MdMenuBook />;
  } else if (data == "Calender") {
    return <MdOutlineCalendarMonth />;
  } else if (data == "Inbox") {
    return <MdMessage />;
  } else if (data == "Profile") {
    return <MdAssignmentInd />;
  } else {
    return null;
  }
}
