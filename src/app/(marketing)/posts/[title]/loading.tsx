import Link from 'next/link';
import { Button } from '@/components/button/Button';
import { TextSkeleton } from '@/components/TextSkeleton/TextSkeleton';

export default function Loading() {
  return (
    <section className='max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 py-12'>
      <div className='grid gap-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className='grid gap-4'>
            <TextSkeleton className='h-2.5 bg-teal-400/50 w-48 mb-4' />
            <TextSkeleton className='h-2.5 w-48 mb-4' />
          </div>
          <TextSkeleton className='h-2 w-48 mb-4' />
        </div>
        <hr />
        <div className='grid gap-2.5'>
          <TextSkeleton className='h-2.5 w-48 mb-1.5' />
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
          <span className='sr-only'>Loading...</span>
        </div>
        <Link href='/posts'>
          <Button className='animate-pulse' disabled>
            Back to Posts
          </Button>
        </Link>
      </div>
    </section>
  );
}
