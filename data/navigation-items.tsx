import { Home, Smartphone, Monitor, Award, Mail } from "lucide-react";

const iconSize = "h-5 w-5";
const navigationItems = [
  {
    title: "About Me",
    icon: <Home className={iconSize} />,
    link: "#home",
  },
  {
    title: "Mobile",
    icon: <Smartphone className={iconSize} />,
    link: "#mobile",
  },
  {
    title: "Web",
    icon: <Monitor className={iconSize} />,
    link: "#web",
  },
  {
    title: "Grades",
    icon: <Award className={iconSize} />,
    link: "#grades",
  },
  {
    title: "Contact",
    icon: <Mail className={iconSize} />,
    link: "#contact",
  },
];

export default navigationItems;
