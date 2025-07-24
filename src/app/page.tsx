import { Hero } from "@/components";
import { Team } from "@/components/Team";
import { Services } from "@/components/Services";
import { Cosmetics } from "@/components/Cosmetics";
import { WhyUs } from "@/components/WhyUs";


export default function Home() {
  return (
    <div>
      <Hero
        title={<>
        <span className={'text-4xl md:text-6xl text-green-600 font-black text-shadow-xs text-shadow-black bg-black px-1 inline-block mb-2'}>BUNKER</span><br/> BARBERSHOP
        </>}
        image={'/hero-bg.png'}
        description={'Це стильне місце для чоловіків, де майстерність барберів поєднується з атмосферою сучасності та традицій. Тут пропонують не лише якісні стрижки та догляд за бородою, а й можливість відчути себе частиною спільноти, де кожна деталь створена для вашого комфорту.'}
      />
      <Team />
      <Services />
      <WhyUs />
      <Cosmetics />
    </div>
  );
}
