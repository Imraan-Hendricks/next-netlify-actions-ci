'use server';

import { connectDb } from './config';
import { GenericError, InternalServerError } from '@/utils/error-utils';

export async function logError(error: unknown) {
  try {
    const db = await connectDb();
    const errorLogsCollection = db.collection<GenericError>('errorLogs');

    const errorLog: GenericError =
      error instanceof GenericError
        ? error
        : error instanceof Error
        ? new GenericError(error.message)
        : new InternalServerError();

    await errorLogsCollection.insertOne(errorLog);
  } catch (error) {
    console.error('Failed to log error:', error);
  }
}
