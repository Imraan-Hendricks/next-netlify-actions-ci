import { getErrorMessage } from '@/utils/error-utils';
import { postServices } from './post-services';

export async function getPostByTitle(title: string) {
  try {
    const post = await postServices.getPostByTitle(title);
    return post;
  } catch (error) {
    throw getErrorMessage(error);
  }
}

export async function getPosts() {
  try {
    const posts = await postServices.getPosts();
    return posts;
  } catch (error) {
    throw getErrorMessage(error);
  }
}
