'use client';

import Link from 'next/link';
import { Button } from '@/components/button/Button';
import { formatTimeLong } from '@/utils/time-utils';
import { logError } from '@/app/logs/ErrorLogs/error-logs-actions';
import { Typography } from '@/components/Typography/Typography';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    logError(error);
  }, [error]);

  return (
    <div className='max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 py-12'>
      <div className='grid gap-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className='grid gap-4'>
            <Typography
              as='span'
              variant='largeprint'
              className='text-teal-400 text-center lg:text-start'>
              404 | No Record
            </Typography>
            <Typography
              as='h1'
              variant='h1'
              className='text-center lg:text-start'>
              {error.message}
            </Typography>
          </div>
          <Typography
            as='span'
            className='text-gray-500 text-center lg:text-start'>
            {formatTimeLong(new Date())}
          </Typography>
        </div>
        <hr />
        <Typography className='text-gray-500'>
          We apologize, but it seems that the post {`you're`} looking for{' '}
          {`doesn't`}
          exist. Perhaps it has been removed or there was a typo in the URL.
          Please double-check the title of the post and make sure {`it's`}{' '}
          spelled correctly. If you believe this is an error,{' '}
          <Link href='/support' className='text-teal-500 hover:text-teal-600'>
            please contact our support team
          </Link>{' '}
          for assistance. In the meantime, you can explore our other posts to
          find interesting content.
        </Typography>
        <div className='flex gap-2'>
          <Link href='/posts'>
            <Button>Back to Posts</Button>
          </Link>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </div>
  );
}
