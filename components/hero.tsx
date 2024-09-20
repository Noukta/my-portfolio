"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import tools from "@/data/tools";

export function Hero() {
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
        <ul className="w-full flex flex-wrap justify-center items-center gap-5 pb-5">
          {tools.map((item) => (
            <li key={item.title} className="h-fit w-fit">
              {item.icon}
              <span className="sr-only">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
