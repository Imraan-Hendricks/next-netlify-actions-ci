import { BiLogoNetlify } from 'react-icons/bi';

export function Hero() {
  return (
    <div className='h-screen flex justify-center items-center gap-4'>
      <BiLogoNetlify className='h-24 w-auto text-teal-400' />
      <div className='border-r-2 border-r-gray-200 h-24'></div>
      <h1 className='text-7xl'>Next Netlify Actions CI</h1>
    </div>
  );
}
