import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiAndroid,
  SiJetpackcompose,
  SiFirebase,
  SiAppwrite,
} from "react-icons/si";

const iconSize = "h-16 w-16";

const tools = [
  {
    title: "React (Native)",
    icon: <SiReact className={iconSize} />,
  },
  {
    title: "Expo",
    icon: <SiExpo className={iconSize} />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className={iconSize} />,
  },
  {
    title: "HTML5",
    icon: <SiHtml5 className={iconSize} />,
  },
  {
    title: "CSS3",
    icon: <SiCss3 className={iconSize} />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className={iconSize} />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className={iconSize} />,
  },
  {
    title: "Android",
    icon: <SiAndroid className={iconSize} />,
  },
  {
    title: "Jetpack Compose",
    icon: <SiJetpackcompose className={iconSize} />,
  },
  {
    title: "Firebase",
    icon: <SiFirebase className={iconSize} />,
  },
  {
    title: "Appwrite",
    icon: <SiAppwrite className={iconSize} />,
  },
];
export default tools;
