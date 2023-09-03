'use client';

import { deletePostById } from '../post-actions';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { HiTrash } from 'react-icons/hi';
import { ImSpinner8 } from 'react-icons/im';

interface DeletePostProps {
  _id: string;
}

export function DeletePost({ _id }: DeletePostProps) {
  return (
    <form action={deletePostById}>
      <input hidden name='_id' value={_id} readOnly />
      <SubmitDeletePost />
    </form>
  );
}

export function SubmitDeletePost() {
  const { pending } = useFormStatus();
  return (
    <button className='disabled:opacity-70' disabled={pending}>
      {pending ? (
        <ImSpinner8 className='h-5 w-auto text-gray-200 animate-spin' />
      ) : (
        <HiTrash className='h-6 w-auto text-gray-200 hover:text-white active:text-gray-200 cursor-pointer' />
      )}
    </button>
  );
}
