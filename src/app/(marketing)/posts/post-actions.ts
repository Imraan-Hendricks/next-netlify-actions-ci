'use server';

import { errorResponse } from '@/utils/error-utils';
import { logError } from '@/app/logs/error-logs/error-logs-services';
import { ObjectId } from 'mongodb';
import { NewPost, NewPostErrors, postServices } from './post-services';
import { parseObjectId } from '@/utils/db-utils';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  try {
    const newPost = postServices.NewPostSchema.parse({
      author: formData.get('author')?.toString(),
      title: formData.get('title')?.toString(),
      body: formData.get('body')?.toString(),
    });

    await postServices.ensureUniqueTitle(newPost.title);
    await postServices.createPost(newPost);
  } catch (error) {
    return {
      error: errorResponse<NewPost, NewPostErrors>(error),
    };
  }
  redirect('/posts');
}

export async function deletePostById(formData: FormData) {
  try {
    const _id = parseObjectId(formData.get('_id')?.toString());
    await postServices.deletePostById(new ObjectId(_id));
    revalidatePath('/posts');
  } catch (error) {
    logError(error);
    return { error: errorResponse(error) };
  }
}
