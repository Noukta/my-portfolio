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
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { webProjects } from "@/data/projects";

export function Web() {
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
      id="web"
      className="w-full min-h-screen flex flex-col justify-start px-4 py-16"
    >
      <h1 className="text-2xl font-semibold mb-8 text-center">Web Projects</h1>
      <div className="flex flex-col justify-center items-center mx-16">
        <Carousel setApi={setApi} className="w-full max-w-2xl">
          <CarouselContent>
            {webProjects.map((project) => (
              <CarouselItem key={project.title} className="p-8">
                <Card className="rounded-2xl shadow-lg">
                  <CardContent className="flex aspect-video items-center justify-center p-2">
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
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{webProjects[current].title}</CardTitle>
            <CardDescription>
              {webProjects[current].shortDescription}
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
              Released: {webProjects[current].date}
            </p>
            <Button
              variant="outline"
              size="sm"
              aria-label={`View ${webProjects[current].title} on GitHub`}
              onClick={() =>
                window.open(
                  webProjects[current].githubUrl,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
