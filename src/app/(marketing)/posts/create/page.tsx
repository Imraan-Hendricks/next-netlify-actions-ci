import { CreatePostForm } from './CreatePostForm/CreatePostForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Netlify Actions CI | Create Post',
};

export default function Create() {
  return (
    <div>
      <CreatePostForm />
    </div>
  );
}
