import { ClassValue, cn } from '@/utils/common-utils';

interface TextSkeletonProps {
  className?: ClassValue;
}

export function TextSkeleton({ className }: TextSkeletonProps) {
  const min = 90;
  const max = 100;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  let maxWidth: string;
  switch (num) {
    case 90:
      maxWidth = 'max-w-[90%]';
      break;
    case 91:
      maxWidth = 'max-w-[91%]';
      break;
    case 92:
      maxWidth = 'max-w-[92%]';
      break;
    case 93:
      maxWidth = 'max-w-[93%]';
      break;
    case 94:
      maxWidth = 'max-w-[94%]';
      break;
    case 95:
      maxWidth = 'max-w-[95%]';
      break;
    case 96:
      maxWidth = 'max-w-[96%]';
      break;
    case 97:
      maxWidth = 'max-w-[97%]';
      break;
    case 98:
      maxWidth = 'max-w-[98%]';
      break;
    case 99:
      maxWidth = 'max-w-[99%]';
      break;
    default:
      maxWidth = 'max-w-[100%]';
      break;
  }

  return (
    <div
      role='status'
      className={cn(
        'h-2 bg-gray-200 rounded-full animate-pulse',
        maxWidth,
        className,
      )}></div>
  );
}
