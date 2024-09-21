import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mobile } from "@/components/mobile"
import { Web } from "@/components/web"
import { Grades } from "@/components/grades"
import { Footer } from "@/components/footer"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function Home() {
  return (
    <TooltipProvider>
      <Header />
      <main>
        <Hero />
        <Mobile />
        <Web />
        <Grades />
      </main>
      <Footer />
    </TooltipProvider>
  )
}
