import './globals.css';
import { Font } from '@/components/Font/Font';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { VercelModal } from './VercelModal';

export const metadata: Metadata = {
  authors: { name: 'Imraan-Hendricks', url: 'https://www.imraanhendricks.com' },
  title: 'Next Netlify Actions CI',
  description:
    'A guide for setting up Continuous Integration and Continuous Deployment (CI/CD) for Next.js applications using GitHub Actions and Netlify.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <Font>
          {children}
          <VercelModal />
        </Font>
      </body>
    </html>
  );
}
