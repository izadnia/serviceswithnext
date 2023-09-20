import IconTile from "./IconTile";
import {
  LiaBroomSolid,
  LiaBrushSolid,
  LiaCogSolid,
  LiaFillDripSolid,
  LiaBlenderSolid,
  LiaCandyCaneSolid,
  LiaCaretSquareUp,
} from "react-icons/lia";
interface dataProps {
  title: string;
  id: string;
  color: string;
  backgroundColor: string;
}

export default function IconStyle({
  id,
  title,
  color,
  backgroundColor,
}: dataProps) {
  if (id == "cleaning") {
    return (
      <IconTile backgroundColor={backgroundColor} color={color} title={title}>
        <LiaBroomSolid />
      </IconTile>
    );
  } else if (id == "reparing") {
    return (
      <IconTile backgroundColor={backgroundColor} color={color} title={title}>
        <LiaCogSolid />
      </IconTile>
    );
  } else if (id == "painting") {
    return (
      <IconTile backgroundColor={backgroundColor} color={color} title={title}>
        <LiaBrushSolid />
      </IconTile>
    );
  } else if (id == "laundry") {
    return (
      <IconTile backgroundColor={backgroundColor} color={color} title={title}>
        <LiaFillDripSolid />
      </IconTile>
    );
  } else if (id == "appliance") {
    return (
      <IconTile backgroundColor={backgroundColor} color={color} title={title}>
        <LiaBlenderSolid />
      </IconTile>
    );
  } else if (id == "plumbing") {
    return (
      <IconTile backgroundColor={backgroundColor} color={color} title={title}>
        <LiaCandyCaneSolid />
      </IconTile>
    );
  } else if (id == "shifting") {
    return (
      <IconTile backgroundColor={backgroundColor} color={color} title={title}>
        <LiaCaretSquareUp />
      </IconTile>
    );
  } else {
    return null;
  }
}
