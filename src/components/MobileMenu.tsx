'use client';

import { Portal } from './Portal';
import { Navbar, WorkingHours } from "@/components/layout";
import { Button } from "@/components/ui";
import Image from "next/image";

type ModalProps = {
  onClose: () => void;
};

export const MobileMenu = ({ onClose }: ModalProps) => {
  return (
    <Portal>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-stone-950 p-10 border border-green-700 rounded-xl shadow-xl relative">
          <WorkingHours className={'mb-4 block md:hidden'}/>
          <Navbar className={'flex flex-col items-center mb-4'} />
          <Button className={'mx-auto flex'}>
            <a href="https://n828512.alteg.io">Записатися</a>
          </Button>
          <Button onClick={onClose} className={'bg-transparent absolute right-0 top-0'}>
            <Image src={'/cross.svg'} width={30} height={30} alt={'Close'}/>
          </Button>
        </div>
      </div>
    </Portal>
  );
};
