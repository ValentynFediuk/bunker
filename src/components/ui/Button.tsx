import { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  background?: string;
};

export const Button = ({ type = 'button', children, background, className, onClick }: ButtonProps) => {
  switch (background) {
    case 'primary':
      background = 'bg-green-900';
      break;
    case 'black':
      background = 'bg-black-900';
      break;
    default:
      background = 'bg-green-900';
      break;
  }
  return (
    <button onClick={onClick} className={classNames(className, background, 'px-4 py-2 rounded-2xl uppercase font-bold')} type={type}>
      {children}
    </button>
  );
};
