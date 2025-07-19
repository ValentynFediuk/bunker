import Title from "@/components/ui/Title";

export default function Hero() {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container relative z-20 text-center text-white max-w-2xl">
        <Title level={1} className={'text-6xl font-black'}><span className={'text-6xl  text-green-600 font-black text-shadow-xs text-shadow-black bg-black px-1 inline-block mb-2'}>BUNKER</span><br/> BARBERSHOP</Title>
        <p className="mt-4 text-lg md:text-xl">Це стильне місце для чоловіків, де майстерність барберів поєднується з атмосферою сучасності та традицій. Тут пропонують не лише якісні стрижки та догляд за бородою, а й можливість відчути себе частиною спільноти, де кожна деталь створена для вашого комфорту.</p>
      </div>
    </section>
  );
}
