import { Title } from "@/components/ui/Title";

type HeroProps = {
  title: React.ReactNode;
  image: string;
  description: string;
}

export const Hero = ({title, image, description}: HeroProps) => {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat" }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container relative z-20 text-center text-white max-w-2xl">
        <Title typeTitle={'h1'} className={'text-4xl md:text-6xl'}>{title}</Title>
        <p className="mt-4 text-lg md:text-xl">{description}</p>
      </div>
    </section>
  );
}
