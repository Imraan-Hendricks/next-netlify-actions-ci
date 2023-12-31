import {
  BadRequestError,
  DatabaseError,
  NoRecordError,
} from '@/utils/error-utils';
import { errorLogsServices } from '@/app/logs/ErrorLogs/error-logs-services';
import { getCollection } from '@/utils/db-utils';
import { ObjectId } from 'mongodb';
import { z } from 'zod';

export type Post = z.infer<typeof PostSchema>;
export const PostSchema = z.object({
  _id: z.instanceof(ObjectId),
  author: z.string().min(3).max(50),
  title: z.string().min(5).max(50),
  body: z.string().min(400).max(100000),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type NewPost = z.infer<typeof NewPostSchema>;
export type NewPostErrors = {
  [K in keyof NewPost]?: string[] | undefined;
};
export const NewPostSchema = PostSchema.pick({
  author: true,
  title: true,
  body: true,
});

export async function createPost(newPost: NewPost) {
  try {
    const postsCollection = await getCollection<Post>('posts');
    const timestamp = new Date();
    await postsCollection.insertOne({
      ...NewPostSchema.parse(newPost),
      _id: new ObjectId(),
      createdAt: timestamp,
      updatedAt: timestamp,
    });
  } catch (error) {
    errorLogsServices.logError(error);
    throw new DatabaseError('Failed to create post');
  }
}

export async function deletePostById(_id: ObjectId) {
  try {
    const postsCollection = await getCollection<Post>('posts');
    await postsCollection.deleteOne({ _id });
  } catch (error) {
    errorLogsServices.logError(error);
    throw new DatabaseError('Failed to delete post');
  }
}

export async function ensureUniqueTitle(title: string) {
  try {
    const postsCollection = await getCollection<Post>('posts');
    const existingPost = await postsCollection.findOne<{ title: string }>(
      { title: title },
      { projection: { title: 1 } },
    );
    if (existingPost) throw new BadRequestError('Post already exists');
  } catch (error) {
    if (error instanceof BadRequestError) throw error;
    errorLogsServices.logError(error);
    throw new DatabaseError('Failed to check for unique title');
  }
}

export async function getPostByTitle(title: string) {
  try {
    const postsCollection = await getCollection<Post>('posts');
    const post = await postsCollection.findOne({ title });
    if (!post) throw new NoRecordError('Post does not exist');
    return { ...post, _id: post._id.toString() };
  } catch (error) {
    if (error instanceof NoRecordError) throw error;
    errorLogsServices.logError(error);
    throw new DatabaseError('Failed to get post');
  }
}

export async function getPosts() {
  try {
    const postsCollection = await getCollection<Post>('posts');
    const posts = await postsCollection
      .find({})
      .limit(20)
      .sort({ createdAt: -1 })
      .map(post => ({ ...post, _id: post._id.toString() }))
      .toArray();
    return posts;
  } catch (error) {
    errorLogsServices.logError(error);
    throw new DatabaseError('Failed to get posts');
  }
}

export const postServices = {
  createPost,
  deletePostById,
  ensureUniqueTitle,
  getPostByTitle,
  getPosts,
  PostSchema,
  NewPostSchema,
};
