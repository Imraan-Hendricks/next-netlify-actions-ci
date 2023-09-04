import { BiLogoNetlify } from 'react-icons/bi';
import { Button } from '@/components/button/Button';

export function Hero() {
  return (
    <section className='h-screen flex flex-col justify-center items-center gap-4  bg-gradient-to-br from-white via-teal-400/10 to-teal-400 shadow'>
      <div className='flex justify-center items-center gap-4'>
        <BiLogoNetlify className='h-24 w-auto text-teal-400' />
        <div className='border-r-2 border-r-gray-200 h-24'></div>
        <h1 className='text-7xl'>Next Netlify Actions CI</h1>
      </div>
      <p className='text-gray-400 text-xl leading-relaxed mb-4 max-w-4xl text-center'>
        Empowering Web Development with Streamlined and Automated CI/CD
        Innovations that Harness the Power of GitHub Actions and Netlify for
        Effortless CI/CD Excellence.
      </p>
      <div className='flex gap-2'>
        <Button>See Documentation</Button>
        <Button>Visit Repository</Button>
      </div>
    </section>
  );
}
