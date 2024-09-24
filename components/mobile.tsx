"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Github } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { mobileProjects } from "@/data/projects"
import { Skeleton } from "./ui/skeleton"

export function Mobile() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap())
    console.log("effect ", current)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      console.log("listener ", current)
    })
  }, [api])

  return (
    <section id="mobile" className="w-full min-h-screen flex flex-col py-16">
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Mobile Projects
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16 gap-y-8 my-auto">
        <Carousel
          opts={{
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-lg"
        >
          <CarouselContent>
            {mobileProjects.map((project) => (
              <CarouselItem key={project.title} className="basis-2/3">
                <Card className="rounded-2xl">
                  <CardContent className="flex aspect-[9/19] items-center justify-center p-2">
                    {/* <Skeleton className="h-full w-full object-cover rounded-2xl" /> */}
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
        </Carousel>
        <Card className="w-10/12 max-w-md">
          <CardHeader>
            <CardTitle>{mobileProjects[current].title}</CardTitle>
            <CardDescription>
              {mobileProjects[current].shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-justify text-muted-foreground">
              {mobileProjects[current].longDescription}
            </p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Released: {mobileProjects[current].date}
            </p>
            <Button
              disabled={mobileProjects[current].githubUrl == ""}
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
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
