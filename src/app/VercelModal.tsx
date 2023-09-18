import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/button/Button';
import Link from 'next/link';

export function VercelModal() {
  return (
    <div className='fixed z-50 inset-0 flex justify-center items-end pb-[5%] bg-black/70'>
      <div className='bg-white max-w-4xl mx-4 grid gap-4 p-8'>
        <div className='grid gap-1'>
          <Typography as='h1' variant='h1'>
            Moved to Vercel:
          </Typography>
          <Typography
            as='h2'
            variant='largeprint'
            bold
            className='text-gray-500 leading-snug'>
            Next.js Advanced Features Not Supported on Netlify
          </Typography>
        </div>
        <hr />
        <Typography className='text-gray-500'>
          This site was initially deployed on Netlify, but due to limitations in
          Next.js support, some features {`didn't`} function as intended. As a
          result, the site has been moved to Vercel, where the latest Next.js
          features are fully supported, ensuring a seamless browsing experience.
        </Typography>
        <Link href='https://next-netlify-actions-ci-vercel.vercel.app'>
          <Button>Visit the Upgraded Version on Vercel</Button>
        </Link>
      </div>
    </div>
  );
}
