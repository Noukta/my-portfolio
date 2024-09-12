"use client";

import { useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  Smartphone,
  Monitor,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  const navItems = [
    {
      title: "About Me",
      icon: <Home className="h-6 w-6" />,
      link: "#home",
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      link: "#mobile",
    },
    {
      title: "Web",
      icon: <Monitor className="h-6 w-6" />,
      link: "#web",
    },
    {
      title: "Grades",
      icon: <GraduationCap className="h-6 w-6" />,
      link: "#grades",
    },
    {
      title: "Contact",
      icon: <Mail className="h-6 w-6" />,
      link: "#contact",
    },
  ];

  const exLinks = [
    {
      title: "Github",
      icon: <Github className="h-6 w-6" />,
      link: "https://github.com",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      link: "https://linkedin.com",
    },
  ];

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      headerElement.style.transitionDuration = "500ms";
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-10" ref={headerRef}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-start">
        <TooltipProvider>
          <nav className="dark:bg-white bg-gray-400 dark:bg-opacity-10 bg-opacity-10 backdrop-blur-sm rounded-full max-w-2xl mx-auto px-4 py-2">
            <ul className="flex justify-center items-start space-x-6">
              {navItems.map((item) => (
                <li key={item.title} className="text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.link}
                        className="text-sm font-medium transition-colors"
                      >
                        {item.icon}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs">
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute flex px-2 py-4 md:px-4 md:py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full">
            <ul className="flex flex-col justify-center items-center md:flex-row md:space-x-6">
              {exLinks.map((item) => (
                <li key={item.title} className="text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.link}
                        className="text-sm font-medium transition-colors"
                      >
                        {item.icon}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs">
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
          <ModeToggle />
        </TooltipProvider>
      </div>
    </header>
  );
}
