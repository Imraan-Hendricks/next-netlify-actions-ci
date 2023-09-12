import Link from 'next/link';
import { getPosts } from '../post-services';
import { ImPlus } from 'react-icons/im';
import { PostCard } from './PostCard/PostCard';
import { Typography } from '@/components/Typography/Typography';

export async function PostList() {
  const posts = await getPosts();

  return (
    <section className='py-12 container mx-auto grid gap-4'>
      <Typography as='h1' variant='h1'>
        Posts
      </Typography>
      {posts.length === 0 ? (
        <div>
          <Typography>No posts yet</Typography>
        </div>
      ) : (
        <div className='grid gap-4'>
          <Link
            href='/posts/create'
            className='bg-teal-400 hover:bg-teal-500 active:bg-teal-400 cursor-pointer p-2 rounded-full ml-auto w-max mx-8'>
            <ImPlus className='h-4 w-auto text-white' />
          </Link>
          <ul className='grid gap-4'>
            {posts.map(props => (
              <li key={props.title}>
                <PostCard {...props} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
