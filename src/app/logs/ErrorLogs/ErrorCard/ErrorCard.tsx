import { formatTimeLong } from '@/utils/time-utils';
import { Typography } from '@/components/Typography/Typography';

interface ErrorCardProps {
  name: string;
  message: string;
  timestamp: Date;
}

export function ErrorCard({ name, message, timestamp }: ErrorCardProps) {
  return (
    <div
      key={timestamp.toString()}
      className='grid gap-1 border rounded py-8 px-8'>
      <Typography bold className='text-teal-500'>
        {name}
      </Typography>
      <Typography as='span' variant='fineprint' className='text-gray-400'>
        {formatTimeLong(timestamp)}
      </Typography>
      <Typography variant='fineprint'>{message}</Typography>
    </div>
  );
}
