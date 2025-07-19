import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import WorkingHours from "@/components/layout/WorkingHours";
import Image from "next/image";

export default function Header() {

  return (
    <header className="bg-stone-950 px-2 py-4">
      <div className="container flex justify-between items-center">
        <Logo />
        <Navbar className={'hidden lg:block'} />
        <div className="flex items-center gap-4">
          <WorkingHours/>
          <Button>
            <a href="https://n828512.alteg.io">Записатися</a>
          </Button>
          <Button className={'bg-transparent block lg:hidden'}>
            <Image width={30} height={30} src='/menu.svg' alt='Menu'/>
          </Button>
        </div>
      </div>
    </header>
  );
}
