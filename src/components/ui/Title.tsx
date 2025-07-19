import React from 'react';
import classnames from 'classnames';

type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export default function Title ({ children, level = 2, className }: TitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    {
      className: classnames(className),
    },
    children,
  );
};
