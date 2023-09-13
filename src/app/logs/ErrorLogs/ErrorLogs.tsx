import { ErrorCard } from './ErrorCard/ErrorCard';
import { getErrorLogs } from './error-logs-data';
import { Typography } from '@/components/Typography/Typography';

export async function ErrorLogs() {
  const errorLogs = await getErrorLogs();

  return (
    <section className='container mx-auto py-12 px-4'>
      <div className='grid gap-8'>
        <Typography as='h1' variant='h1'>
          Error Logs
        </Typography>
        {errorLogs.length === 0 ? (
          <div>
            <Typography className='text-gray-500'>No error logs yet</Typography>
          </div>
        ) : (
          <ul className='grid gap-4'>
            {errorLogs.map(({ name, message, timestamp }, i) => (
              <li key={timestamp.toString()}>
                <ErrorCard
                  name={name}
                  message={message}
                  timestamp={timestamp}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
