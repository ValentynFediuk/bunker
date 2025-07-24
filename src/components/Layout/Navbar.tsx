import Link from "next/link";
import classNames from "classnames";

const navItems = [
  {link: '/', label: 'Головна'},
  {link: '/goods', label: 'Косметика'},
  {link: '/contact', label: 'Контакти'},
  {link: '/team', label: 'Команда'},
]

type NavBarProps = {
  className?: string;
}

export const Navbar = ({className}: NavBarProps) => {
  return (
    <nav>
      <ul className={classNames(className, 'gap-4 uppercase font-bold')}>
        {navItems.map(({link, label}) => (
            <li key={link}>
              <Link href={link} key={link}>{label}</Link>
            </li>
        ))}
      </ul>
    </nav>
  )
}
