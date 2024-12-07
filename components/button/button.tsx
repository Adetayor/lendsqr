import React, { PropsWithChildren } from 'react';
import styles from './button.module.scss';

type Props = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
}
