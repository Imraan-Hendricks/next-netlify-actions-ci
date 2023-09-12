import { Metadata } from 'next';
import { PostList } from './PostList/PostList';

export const metadata: Metadata = {
  title: 'Next Netlify Actions CI | Posts',
};

export default function Posts() {
  return (
    <div>
      <PostList />
    </div>
  );
}
