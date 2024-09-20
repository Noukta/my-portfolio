import { Github, Linkedin } from "lucide-react";

const size = "h-5 w-5";
const externalLinks = [
  {
    title: "Github",
    icon: <Github className={size} />,
    link: "https://github.com",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className={size} />,
    link: "https://linkedin.com",
  },
];

export default externalLinks;
