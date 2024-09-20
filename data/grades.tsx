import { GraduationCap, Trophy } from "lucide-react";
import { SiMeta } from "react-icons/si";

const iconSize = "text-primary-foreground h-5 w-5";
const grades = [
  {
    icon: <SiMeta className={iconSize} />,
    title: "Meta Front-End Developer",
    description: "Meta Front-End Developer Online Professional Certificate",
    link: "https://coursera.org/share/cfaf949f070947819b56b5925012ae7b",
    date: "September 2024",
  },
  {
    icon: <Trophy className={iconSize} />,
    title: "Capgemini Coding Challenge",
    description:
      "Qualified to Capgemini Coding Challenge Final in Casanearshore, Casablanca",
    link: "https://drive.google.com/file/d/1WnsmROCdX38vXbz0pUx3rSUxUaKKvomO/view",
    date: "December 2016",
  },
  {
    icon: <GraduationCap className={iconSize} />,
    title: "Master's degree",
    description:
      "In Information Systems, Networks and Multimedia at Sidi Mohammed Ben Abdellah university, Fez",
    date: "2015 - 2017",
  },
  {
    icon: <GraduationCap className={iconSize} />,
    title: "Bachelor's Degree",
    description:
      "In Computer Science and Mathematics at Cadi Ayyad university, Safi",
    date: "2012 - 2015",
  },
  {
    icon: <GraduationCap className={iconSize} />,
    title: "Baccalaureate",
    description:
      "In Sciences and Electrical Technologies at Technical high school Acharif Al Idrissi, Safi",
    date: "2011 - 2012",
  },
];

export default grades;
