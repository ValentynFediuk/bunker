import Image from "next/image";

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
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-stone-300 transition"
          >
            <Image width={24} height={24} src={icon} alt={label} />
          </a>
        </li>
      ))}
    </ul>
  )
}