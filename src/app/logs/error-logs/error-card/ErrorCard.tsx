import { formatTimeLong } from '@/utils/time-utils';

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
      <h2 className='text-teal-500'>{name}</h2>
      <span className='text-gray-400 text-sm'>{formatTimeLong(timestamp)}</span>
      <p className='text-sm'>{message}</p>
    </div>
  );
}
