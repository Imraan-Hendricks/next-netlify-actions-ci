import type { Metadata } from 'next';
import { Post } from './Post/Post';

interface PostByTitleProps {
  params: { title: string };
}

export async function generateMetadata({
  params,
}: PostByTitleProps): Promise<Metadata> {
  const title = decodeURIComponent(params.title);

  return {
    title: `Next Netlify Actions CI | ${title}`,
  };
}

export default function PostByTitle({ params }: PostByTitleProps) {
  const title = decodeURIComponent(params.title);

  return (
    <div>
      <Post title={title} />
    </div>
  );
}
