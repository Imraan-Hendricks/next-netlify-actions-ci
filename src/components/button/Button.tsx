import { PropsWithChildren } from 'react';

export function Button({ children }: PropsWithChildren) {
  return (
    <button className='bg-teal-400 hover:bg-teal-500 active:bg-teal-400 text-white py-2.5 px-7 rounded transition-colors'>
      {children}
    </button>
  );
}
