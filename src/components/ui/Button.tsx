import { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ type = 'button', children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classNames(className, 'bg-green-900 px-4 py-2 rounded-2xl uppercase font-bold')} type={type}>
      {children}
    </button>
  );
};
