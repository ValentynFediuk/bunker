import { Logo, Navbar, Social } from "@/components/layout";

export const Footer = () => {
  return (
    <footer className="bg-stone-950 px-2 py-4 text-white">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo />
        <Navbar className={'flex'}/>
        <Social/>
      </div>
    </footer>
  );
}
