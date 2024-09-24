"use client"

import Link from "next/link"
import { Contact } from "./contact"
import navigationItems from "@/data/navigation-items"
import externalLinks from "@/data/external-links"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-16 py-16 bg-secondary"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        {/* contact Section */}
        <section className="col-span-2">
          <Contact />
        </section>

        {/* Quick Links */}
        <section className="pl-8">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li
                key={item.title}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Social Links */}
        <section className="pl-8">
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="flex space-x-4">
            {externalLinks.map((item) => (
              <li key={item.title} className="text-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
        </section>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-16 border-t border-muted-foreground/25">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Ahmed Noukta. All rights reserved.
        </p>
        <p className="text-sm text-center text-muted-foreground">
          Made with &#x1F9E1; using React &{" "}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @shadcn
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
