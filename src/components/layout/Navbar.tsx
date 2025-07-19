import Link from "next/link";
import classNames from "classnames";

const navItems = [
  {link: '/', label: 'Головна'},
  {link: '/goods', label: 'Косметика'},
  {link: '/contact', label: 'Контакти'},
]

type NavBarProps = {
  className?: string;
}

export default function Navbar({className}: NavBarProps) {
  return (
    <nav className={classNames(className)}>
      <ul className={'flex gap-4 uppercase font-bold'}>
        {navItems.map(({link, label}) => (
            <li key={link}>
              <Link href={link} key={link}>{label}</Link>
            </li>
        ))}
      </ul>
    </nav>
  )
}
