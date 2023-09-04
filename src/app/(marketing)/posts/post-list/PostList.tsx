import Link from 'next/link';
import { DeletePost } from './DeletePost';
import { getPosts } from '../post-services';
import { formatTimeLong } from '@/utils/time-utils';
import { ImPlus } from 'react-icons/im';

export default async function PostList() {
  const posts = await getPosts();

  return (
    <section className='py-12 container mx-auto grid gap-4'>
      <h1 className='text-3xl'>Posts</h1>
      {posts.length === 0 ? (
        <div>
          <p>No posts yet</p>
        </div>
      ) : (
        <div className='grid gap-4'>
          <Link
            href='/posts/create'
            className='bg-teal-400 hover:bg-teal-500 active:bg-teal-400 cursor-pointer p-2 rounded-full ml-auto w-max mx-8'>
            <ImPlus className='h-4 w-auto text-white' />
          </Link>
          <ul className='grid gap-4'>
            {posts.map(({ _id, title, createdAt }) => (
              <li
                key={title}
                className='relative group border py-8 px-8 rounded flex justify-between items-center hover:bg-teal-400 active:bg-teal-300 cursor-pointer transition-colors'>
                <div className='grid gap-0.5'>
                  <h2 className='text-teal-500 font-medium group-hover:text-white'>
                    {title}
                  </h2>
                  <span className='text-gray-400 text-sm group-hover:text-gray-200'>
                    {formatTimeLong(createdAt)}
                  </span>
                </div>
                <div>
                  <DeletePost _id={_id} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
