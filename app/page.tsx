import { Grades } from "@/components/grades";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mobile } from "@/components/mobile";
import { Web } from "@/components/web";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Mobile />
        <Web />
        <Grades />
      </main>
    </div>
  );
}
