import { DeletePostForm } from './DeletePostForm/DeletePostForm';
import { formatTimeLong } from '@/utils/time-utils';
import { Typography } from '@/components/Typography/Typography';

interface PostCardProps {
  _id: string;
  title: string;
  createdAt: Date;
}

export function PostCard({ _id, title, createdAt }: PostCardProps) {
  return (
    <div className='relative group border py-8 px-8 rounded flex justify-between items-center hover:bg-teal-400 active:bg-teal-300 cursor-pointer transition-colors'>
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
        <DeletePostForm _id={_id} />
      </div>
    </div>
  );
}
