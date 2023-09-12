import { Metadata } from 'next';
import { ErrorLogs } from './ErrorLogs/ErrorLogs';

export const metadata: Metadata = {
  title: 'Next Netlify Actions CI | Logs',
};

export default function Logs() {
  return (
    <div>
      <ErrorLogs />
    </div>
  );
}
