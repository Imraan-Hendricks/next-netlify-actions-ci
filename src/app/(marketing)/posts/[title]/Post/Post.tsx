import Link from 'next/link';
import { Button } from '@/components/button/Button';
import { formatTimeLong } from '@/utils/time-utils';
import { getPostByTitle } from '../../post-data';
import { Typography } from '@/components/Typography/Typography';

interface PostProps {
  title: string;
}

export async function Post({ title }: PostProps) {
  const { author, body, createdAt } = await getPostByTitle(title);

  return (
    <section className='max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 py-12 '>
      <div className='grid gap-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className='grid gap-4'>
            <Typography
              as='span'
              variant='largeprint'
              className='text-teal-400 text-center lg:text-start'>
              {author}
            </Typography>
            <Typography
              as='h1'
              variant='h1'
              className='text-center lg:text-start'>
              {title}
            </Typography>
          </div>
          <Typography
            as='span'
            className='text-gray-500 text-center lg:text-start'>
            {formatTimeLong(createdAt)}
          </Typography>
        </div>
        <hr />
        <Typography variant='body' className='text-gray-500'>
          {body}
        </Typography>
        <Link href='/posts'>
          <Button>Back to Posts</Button>
        </Link>
      </div>
    </section>
  );
}
