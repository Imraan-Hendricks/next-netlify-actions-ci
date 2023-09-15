import Link from 'next/link';
import { BiLogoNetlify } from 'react-icons/bi';
import { Button } from '@/components/button/Button';
import { Typography } from '@/components/Typography/Typography';

export function Hero() {
  return (
    <section className='px-4 h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-white via-teal-400/10 to-teal-400'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-4 text-center'>
        <BiLogoNetlify className='h-24 w-auto text-teal-400' />
        <div className='border-r-2 border-r-gray-200 h-24 hidden lg:block'></div>
        <Typography
          as='h1'
          variant='title'
          className=' max-w-xl lg:max-w-none '>
          Next Netlify Actions CI
        </Typography>
      </div>
      <Typography
        variant='largeprint'
        className='text-gray-400 mb-4 max-w-2xl lg:max-w-4xl text-center'>
        Empowering Web Development with Streamlined and Automated CI/CD
        Innovations that Harness the Power of GitHub Actions and Netlify for
        Effortless CI/CD Excellence.
      </Typography>
      <div className='flex gap-2'>
        <Link href='https://github.com/Imraan-Hendricks/next-netlify-actions-ci'>
          <Button>See Documentation</Button>
        </Link>
        <Link href='/posts'>
          <Button>Browse Articles</Button>
        </Link>
      </div>
    </section>
  );
}
