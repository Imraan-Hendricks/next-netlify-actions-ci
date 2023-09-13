import { ClassValue, cn } from '@/utils/common-utils';
import { MouseEvent, PropsWithChildren } from 'react';

interface ButtonProps {
  className?: ClassValue;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  disabled,
  isLoading,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        'bg-teal-400 hover:bg-teal-500 active:bg-teal-400 text-white text-sm sm:text-base py-2 px-5 sm:py-2.5 sm:px-7 rounded transition-colors disabled:opacity-70',
        className,
      )}
      onClick={onClick}>
      {isLoading ? 'loading...' : children}
    </button>
  );
}
