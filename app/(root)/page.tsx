import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TopServices } from "@/components/TopServices";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopServices />
      <GetInTouch />
    </div>
  );
}
