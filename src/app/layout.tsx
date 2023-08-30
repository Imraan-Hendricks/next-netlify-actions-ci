import './globals.css';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  authors: { name: 'Imraan-Hendricks', url: 'https://www.imraanhendricks.com' },
  title: 'Next Netlify Actions CI',
  description:
    'A guide for setting up Continuous Integration and Continuous Deployment (CI/CD) for Next.js applications using GitHub Actions and Netlify.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
