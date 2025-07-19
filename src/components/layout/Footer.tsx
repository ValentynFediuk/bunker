import Logo from "@/components/layout/Logo";
import Social from "@/components/layout/Social";
import Navbar from "@/components/layout/Navbar";



export default function Footer() {
  return (
    <footer className="bg-stone-950 px-2 py-4 text-white">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo />
        <Navbar/>
        <Social/>
      </div>
    </footer>
  );
}
