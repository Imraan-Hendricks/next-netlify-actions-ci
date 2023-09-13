import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  display: 'swap',
  variable: '--font-inter',
});

export function Font({ children }: PropsWithChildren) {
  return <div className={`${inter.variable} font-inter`}>{children}</div>;
}
