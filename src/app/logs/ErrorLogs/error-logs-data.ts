import { errorLogsServices } from './error-logs-services';
import { getErrorMessage } from '@/utils/error-utils';

export async function getErrorLogs() {
  try {
    const post = await errorLogsServices.getErrorLogs();
    return post;
  } catch (error) {
    throw getErrorMessage(error);
  }
}
