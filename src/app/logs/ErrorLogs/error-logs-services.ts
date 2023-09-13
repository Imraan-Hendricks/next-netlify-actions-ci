import {
  DatabaseError,
  ErrorObject,
  GenericError,
  getErrorMessage,
  InternalServerError,
  ValidationErrorObject,
} from '@/utils/error-utils';
import { getCollection } from '@/utils/db-utils';

export async function getErrorLogs() {
  try {
    const errorLogsCollection = await getCollection<
      ErrorObject | ValidationErrorObject<any>
    >('errorLogs');

    const errorLogs = errorLogsCollection
      .find({})
      .limit(20)
      .sort({ timestamp: -1 })
      .map(post => ({ ...post, _id: post._id.toString() }))
      .toArray();

    return errorLogs;
  } catch (error) {
    logError(error);
    throw new DatabaseError('Failed to get posts');
  }
}

export async function logError(error: unknown) {
  try {
    const errorLogsCollection = await getCollection<
      ErrorObject | ValidationErrorObject<any>
    >('errorLogs');

    const errorLog: GenericError =
      error instanceof GenericError
        ? error
        : error instanceof Error
        ? new GenericError(error.message)
        : new InternalServerError(getErrorMessage(error));

    await errorLogsCollection.insertOne(errorLog.toJSON());
  } catch (error) {
    console.error('Failed to log error:', error);
  }
}

export const errorLogsServices = { getErrorLogs, logError };
