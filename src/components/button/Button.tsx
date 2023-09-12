import { PropsWithChildren } from 'react';

interface ButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  disabled,
  isLoading,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      disabled={disabled || isLoading}
      className='bg-teal-400 hover:bg-teal-500 active:bg-teal-400 text-white text-sm sm:text-base py-2 px-5 sm:py-2.5 sm:px-7 rounded transition-colors disabled:opacity-70'>
      {isLoading ? 'loading...' : children}
    </button>
  );
}
