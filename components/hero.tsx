"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export function Hero() {
  const techItems = [
    {
      title: "React (Native)",
      icon: <SiReact className="h-16 w-16" />,
    },
    {
      title: "Expo",
      icon: <SiExpo className="h-16 w-16" />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className="h-16 w-16" />,
    },
    {
      title: "HTML5",
      icon: <SiHtml5 className="h-16 w-16" />,
    },
    {
      title: "CSS3",
      icon: <SiCss3 className="h-16 w-16" />,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className="h-16 w-16" />,
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs className="h-16 w-16" />,
    },
    {
      title: "Android",
      icon: <SiAndroid className="h-16 w-16" />,
    },
    {
      title: "Jetpack Compose",
      icon: <SiJetpackcompose className="h-16 w-16" />,
    },
    {
      title: "Firebase",
      icon: <SiFirebase className="h-16 w-16" />,
    },
    {
      title: "Appwrite",
      icon: <SiAppwrite className="h-16 w-16" />,
    },
  ];
  return (
    <section
      id="home"
      className="container min-h-screen flex flex-col justify-center mx-auto px-4 pt-24"
    >
      <div className="flex justify-center items-center space-x-6 py-12">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/assets/images/avatar.png" alt="Ahmed Noukta" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold mb-2">Ahmed Noukta</h1>
          <p>
            A passionate developer with expertise in mobile and web
            technologies. Always eager to learn and create innovative solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-8">
        <h2 className="text-2xl font-semibold mb-2">My toolbox</h2>
        <ul className="flex flex-wrap justify-center items-center space-x-4 space-y-4 pb-4">
          {techItems.map((item) => (
            <li key={item.title}>
              {item.icon}
              <span className="sr-only">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
