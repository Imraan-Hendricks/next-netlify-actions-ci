import { ClassValue, cn } from '@/utils/common-utils';
import { createElement } from 'react';

interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  bold?: boolean;
  children: string;
  className?: ClassValue;
  thin?: boolean;
  variant?: 'title' | 'subtitle' | 'h1' | 'largeprint' | 'body' | 'fineprint';
}

export function Typography({
  as = 'p',
  bold,
  children,
  className,
  thin,
  variant = 'body',
}: TypographyProps) {
  const styles = {
    root: 'font-inter',
    title: cn(
      'text-6xl sm:text-7xl',
      thin && 'font-light',
      bold && 'font-medium',
    ),
    subtitle: cn(
      'text-2xl sm:text-3xl font-medium',
      thin && 'font-normal',
      bold && 'font-semibold',
    ),
    h1: cn(
      'text-2xl sm:text-3xl font-medium',
      thin && 'font-normal',
      bold && 'font-semibold',
    ),
    largeprint: cn(
      'text-lg sm:text-xl leading-relaxed',
      thin && 'font-light',
      bold && 'font-medium',
    ),
    body: cn(
      'text-sm sm:text-base',
      thin && 'font-light',
      bold && 'font-medium',
    ),
    fineprint: cn(
      'text-xs sm:text-sm',
      thin && 'font-light',
      bold && 'font-medium',
    ),
  };

  return createElement(
    as,
    { className: cn(styles.root, styles[variant], className) },
    children,
  );
}
