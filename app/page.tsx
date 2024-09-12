import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mobile } from "@/components/mobile";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Mobile />
      </main>
    </div>
  );
}
