"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { GithubIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const mobileProjects = [
  {
    title: "wallios",
    shortDescription: "Wallpaper App",
    longDescription: "",
    date: "September 2023",
    videoUrl: "",
    githubUrl: "https://www.github.com/noukta",
  },
  {
    title: "Wingy",
    shortDescription: "Delivery App",
    longDescription: "",
    date: "July 2024",
    videoUrl: "",
    githubUrl: "https://www.github.com/noukta",
  },
  {
    title: " Monster Makeover",
    shortDescription: "2D Game",
    longDescription: "",
    date: "September 2023",
    videoUrl: "",
    githubUrl: "https://www.github.com/noukta",
  },
  {
    title: "WhaSticker",
    shortDescription: "Whatsapp API",
    longDescription: "",
    date: "July 2024",
    videoUrl: "",
    githubUrl: "https://www.github.com/noukta",
  },
];

export function Mobile() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    console.log("effect ", current);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      console.log("listener ", current);
    });
  }, [api]);

  return (
    <section
      id="mobile"
      className="container min-h-screen flex flex-col justify-start mx-auto px-4 pt-16"
    >
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Mobile Projects
      </h1>
      <div className="grid grid-cols-2 items-center">
        <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {mobileProjects.map((project) => (
              <CarouselItem key={project.title} className="p-8">
                <Card className="rounded-2xl shadow-xl">
                  <CardContent className="flex aspect-[9/16] items-center justify-center p-2">
                    <video
                      src={project.videoUrl}
                      className="bg-secondary h-full w-full object-cover rounded-2xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Card className="w-full max-w-md max-h-fit">
          <CardHeader>
            <CardTitle>{mobileProjects[current].title}</CardTitle>
            <CardDescription>
              {mobileProjects[current].shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-justify text-muted-foreground">
              Project Awesome is a cutting-edge web application that
              revolutionizes the way users interact with online content.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Released: {mobileProjects[current].date}
            </p>
            <Button
              variant="outline"
              size="sm"
              aria-label={`View ${mobileProjects[current].title} on GitHub`}
              onClick={() =>
                window.open(
                  mobileProjects[current].githubUrl,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
