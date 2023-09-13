'use client';

import { DeletePostForm } from './DeletePostForm/DeletePostForm';
import { formatTimeLong } from '@/utils/time-utils';
import { Typography } from '@/components/Typography/Typography';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PostCardProps {
  _id: string;
  title: string;
  createdAt: Date;
}

export function PostCard({ _id, title, createdAt }: PostCardProps) {
  const { push } = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className='relative group border py-8 px-8 rounded flex justify-between items-center hover:bg-teal-400 active:bg-teal-300 cursor-pointer transition-colors'
      onClick={!isHovering ? () => push(`/posts/${title}`) : undefined}>
      <div className='grid gap-0.5'>
        <Typography bold className='text-teal-500 group-hover:text-white'>
          {title}
        </Typography>
        <Typography
          as='span'
          variant='fineprint'
          className='text-gray-400 group-hover:text-gray-200'>
          {formatTimeLong(createdAt)}
        </Typography>
      </div>
      <div>
        <DeletePostForm _id={_id} setIsHovering={setIsHovering} />
      </div>
    </div>
  );
}
