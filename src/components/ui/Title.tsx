import classnames from 'classnames'
import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  typeTitle?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Title = ({ children, typeTitle, className, ...props }: TitleProps) => {
  const classNameBuilder = classnames('font-black', className)

  const titleBuilder = () => {
    switch (typeTitle) {
      case 'h1':
        return (
          <h1 className={classNameBuilder} {...props}>
            {children}
          </h1>
        )
      case 'h2':
        return (
          <h2 className={classnames(classNameBuilder, 'text-3xl md:text-4xl text-center mb-8')} {...props}>
            {children}
          </h2>
        )
      case 'h3':
        return (
          <h3 className={classnames(classNameBuilder, 'text-2xl md:text-3xl text-center mb-4')} {...props}>
            {children}
          </h3>
        )
      default:
        return (
          <h1 className={classNameBuilder} {...props}>
            {children}
          </h1>
        )
    }
  }

  return titleBuilder()
}