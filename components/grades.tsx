"use client";

import grades from "@/data/grades";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Grades() {
  return (
    <section
      id="grades"
      className="w-full min-h-screen flex flex-col justify-center px-4 py-16"
    >
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Grades & Achievements
      </h1>
      <div className="flex justify-center items-center px-4">
        <ol className="relative border-l border-secondary">
          {grades.map((grade, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-primary">
                {grade.icon}
              </span>
              <h3 className="flex flex-row items-center mb-1 text-lg font-semibold">
                {grade.title}
                {grade.link && (
                  <Button variant="link" size="icon" asChild>
                    <a
                      href={grade.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={grade.description}
                      className="inline-flex items-center justify-center"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">{grade.description}</span>
                    </a>
                  </Button>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-600">
                {grade.date}
              </time>
              <p className="mb-4 text-base font-normal text-muted-foreground">
                {grade.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
