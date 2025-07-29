import { Hero } from "@/components/Hero";
import { TopServices } from "@/components/TopServices";
import { GetInTouch } from "@/components/GetInTouch";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopServices />
      <GetInTouch />
      <Location />
    </div>
  );
}
