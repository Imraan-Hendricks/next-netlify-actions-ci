'use client';

import { Button } from '@/components/button/Button';
import { createPost } from '../post-actions';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { NewPostErrors } from '../post-services';
import { useState } from 'react';

export default function Create() {
  const [errors, setErrors] = useState<NewPostErrors>();

  async function onCreatePost(formData: FormData) {
    const res = await createPost(formData);
    console.log(res);
    if (res.error) {
      if ('errors' in res.error) setErrors(res.error.errors);
      alert(res.error.message);
    } else {
      alert('success');
    }
  }

  return (
    <div>
      <section className='py-12 container mx-auto grid gap-8'>
        <h1 className='text-3xl'>Blog</h1>
        <form action={onCreatePost} className='grid gap-8'>
          <div className='flex gap-4 items-start'>
            <div className='grid gap-3 font-medium w-full'>
              <label htmlFor='create-post-name' className='cursor-pointer'>
                Author Name
              </label>
              <input
                id='create-post-name'
                name='author'
                placeholder='Enter Name'
                className='appearance-none border rounded py-2.5 px-4 focus:outline-teal-400'
              />
              <p className='text-red-500 text-sm'>{errors?.author?.[0]}</p>
            </div>
            <div className='grid gap-3 font-medium w-full'>
              <label htmlFor='create-post-title' className='cursor-pointer'>
                Title
              </label>
              <input
                id='create-post-title'
                name='title'
                placeholder='Enter Title'
                className='appearance-none border rounded py-2.5 px-4 focus:outline-teal-400'
              />
              <p className='text-red-500 text-sm'>{errors?.title?.[0]}</p>
            </div>
          </div>
          <div className='grid gap-3 font-medium w-full'>
            <label htmlFor='create-post-body' className='cursor-pointer'>
              Body
            </label>
            <textarea
              id='create-post-body'
              name='body'
              placeholder='Enter Body'
              rows={10}
              className='appearance-none border rounded py-2.5 px-4 focus:outline-teal-400'
            />
            <p className='text-red-500 text-sm'>{errors?.body?.[0]}</p>
          </div>
          <SubmitPost />
        </form>
      </section>
    </div>
  );
}

export function SubmitPost() {
  const { pending } = useFormStatus();
  return <Button isLoading={pending}>Submit Post</Button>;
}
