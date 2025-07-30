import Image from "next/image";
import { Button } from "@/components/ui";

const socialLinks = [
  { link: 'https://www.instagram.com/bunker_klm/', icon: '/instagram.png', label: 'Instagram Icon'},
  { link: 'https://www.tiktok.com/@bunker.klm', icon: '/tiktok.png', label: 'TikTok Icon'},
  { link: 'tel:+380689731515', icon: '/phone.svg', label: 'Phone'},
];

export const Social = () => {
  return (
    <ul className="flex gap-4">
      {socialLinks.map(({ link, icon, label }, index) => (
        <li key={index}>
          <Button typeBtn={'link'} isLink href={link}>
            <Image width={24} height={24} src={icon} alt={label} />
          </Button>
        </li>
      ))}
    </ul>
  )
}