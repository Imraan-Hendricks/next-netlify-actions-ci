import { Hero } from './Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Netlify Actions CI | Home',
};

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
