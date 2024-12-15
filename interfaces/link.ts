import { IconType } from "react-icons";

export default interface iLink {
  title: string;
  children: {
    title: string;
    icon: IconType;
    iconActive: IconType;
    href: string;
  }[];
}
