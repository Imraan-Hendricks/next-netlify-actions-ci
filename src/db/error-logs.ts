'use server';

import {
  ErrorObject,
  GenericError,
  getErrorMessage,
  InternalServerError,
  ValidationErrorObject,
} from '@/utils/error-utils';
import { getCollection } from '@/utils/db-utils';

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
