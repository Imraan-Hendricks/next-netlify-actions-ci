'use server';

import { errorLogsServices } from './error-logs-services';

export async function logError(error: unknown) {
  try {
    await errorLogsServices.logError(error);
  } catch (error) {
    return;
  }
}
