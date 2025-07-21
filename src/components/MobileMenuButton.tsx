'use client'
import Image from "next/image";

import { MobileMenu } from "@/components/MobileMenu";
import { useState } from 'react';
import { Button } from "@/components/ui/Button";

export const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className={'bg-transparent block lg:hidden'}>
            <Image width={30} height={30} src='/menu.svg' alt='Menu'/>
      </Button>
      {open && <MobileMenu onClose={() => setOpen(false)}/>}
    </>
  );
};
