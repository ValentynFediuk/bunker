'use client';

import { ReactNode } from "react";
import classNames from "classnames";
import Link from "next/link";

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
  onClickAction?: () => void;
  isLink?: boolean;
  href?: string;
  typeBtn: 'primary' | 'outlined' | 'link';
};

export const Button = ({
  isLink = false,
  type = 'button',
  children,
  className,
  onClickAction,
  typeBtn,
  href = '/',
}: ButtonProps) => {
  const typeClass = classNames({
    'bg-green-900 px-4 py-2 rounded-2xl uppercase font-bold block': typeBtn === 'primary',
    'bg-transparent border border-white px-4 py-2 rounded-2xl uppercase font-bold block': typeBtn === 'outlined',
    'bg-transparent': typeBtn === 'link',
  });

  const baseClasses = classNames(
    className,
    typeClass
  );

  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  if (isLink) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={baseClasses}
          onClick={onClickAction}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classNames(baseClasses, 'block')} onClick={onClickAction} >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClickAction}  className={baseClasses} type={type}>
      {children}
    </button>
  );
};
