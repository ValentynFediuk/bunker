import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image className={'ml-3 md:ml-0 w-32 md:w-48'} width={175} height={50} src='/logo.png' alt='logo'/>
    </Link>
  )
}