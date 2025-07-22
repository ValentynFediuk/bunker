import { Navbar, Logo, WorkingHours } from "@/components/Layout";
import { MobileMenuButton } from "@/components";
import { Button } from "@/components/ui";

export const Header = () => {

  return (
    <header className="bg-stone-950 px-2 py-4">
      <div className="container flex justify-between items-center">
        <Logo />
        <Navbar className={'hidden lg:flex'} />
        <div className="items-center gap-4 flex">
         <div className={'items-center gap-4 hidden md:flex'}>
           <WorkingHours/>
           <Button typeBtn={'primary'} isLink href={'https://n828512.alteg.io'}>
             Записатися
           </Button>
         </div>
          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
}
