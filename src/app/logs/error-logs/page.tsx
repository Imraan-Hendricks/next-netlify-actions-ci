import { ErrorCard } from './error-card/ErrorCard';
import { getErrorLogs } from './error-logs-services';

export default async function ErrorLogs() {
  const errorLogs = await getErrorLogs();

  return (
    <div>
      <section className='container mx-auto py-12 px-4'>
        <div className='grid gap-8'>
          <h1 className='text-3xl'>Error Logs</h1>
          {errorLogs.length === 0 ? (
            <div>
              <p>No posts yet</p>
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
    </div>
  );
}
