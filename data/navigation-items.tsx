import {
  HomeIcon,
  MobileIcon,
  DesktopIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { PiCertificate } from "react-icons/pi";

const size = "h-[1rem] w-[1rem]";
const navigationItems = [
  {
    title: "About Me",
    icon: <HomeIcon className={size} />,
    link: "#home",
  },
  {
    title: "Mobile",
    icon: <MobileIcon className={size} />,
    link: "#mobile",
  },
  {
    title: "Web",
    icon: <DesktopIcon className={size} />,
    link: "#web",
  },
  {
    title: "Grades",
    icon: <PiCertificate className={size} />,
    link: "#grades",
  },
  {
    title: "Contact",
    icon: <EnvelopeClosedIcon className={size} />,
    link: "#contact",
  },
];

export default navigationItems;
