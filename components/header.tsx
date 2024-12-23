"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import navigationItems from "@/data/navigation-items"
import externalLinks from "@/data/external-links"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  /*const headerRef = useRef<HTMLElement>(null);

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
  }, []);*/

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <div className="w-full px-4 py-4 flex justify-between items-start">
        <nav className="bg-secondary/25 backdrop-blur border border-input rounded-full max-w-2xl mx-auto px-4 py-2">
          <ul className="flex justify-center items-start space-x-6">
            {navigationItems.map((item) => (
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
        <div className="absolute flex px-2 py-4 md:px-4 md:py-2 bg-secondary/25 backdrop-blur border border-input rounded-full">
          <ul className="flex flex-col justify-center items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {externalLinks.map((item) => (
              <li key={item.title} className="text-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
        <ThemeToggle />
      </div>
    </header>
  )
}
