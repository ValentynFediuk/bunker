import { Hero } from "@/components";
import { Team } from "@/components/Team";
import { Services } from "@/components/Services";
import { Cosmetics } from "@/components/Cosmetics";


export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
      <Services />
      <Cosmetics />
    </div>
  );
}
