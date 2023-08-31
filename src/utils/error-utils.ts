export class GenericError extends Error {
  static statusCode: number = 500;
  public statusCode: number = GenericError.statusCode;
  public name: string = 'GenericError';
  public timestamp: Date;

  constructor(message: string = 'An error occurred.') {
    super(message);
    this.timestamp = new Date();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GenericError);
    }
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      name: this.name,
      message: this.message,
    };
  }
}

export class BadRequestError extends GenericError {
  static statusCode: number = 400;
  public statusCode: number = BadRequestError.statusCode;
  public name: string = 'BadRequestError';

  constructor(message: string = 'The request contains invalid data.') {
    super(message);
  }
}

export class DatabaseError extends GenericError {
  static statusCode: number = 500;
  public statusCode: number = DatabaseError.statusCode;
  public name: string = 'DatabaseError';

  constructor(
    message: string = 'An error occurred while accessing the database.',
  ) {
    super(message);
  }
}

export class ForbiddenError extends GenericError {
  static statusCode: number = 403;
  public statusCode: number = ForbiddenError.statusCode;
  public name: string = 'ForbiddenError';

  constructor(message: string = 'Access forbidden.') {
    super(message);
  }
}

export class InternalServerError extends GenericError {
  static statusCode: number = 500;
  public statusCode: number = InternalServerError.statusCode;
  public name: string = 'InternalServerError';

  constructor(message: string = 'An unexpected error occurred on the server.') {
    super(message);
  }
}

export class NotAcceptableError extends GenericError {
  static statusCode: number = 406;
  public statusCode: number = NotAcceptableError.statusCode;
  public name: string = 'NotAcceptableError';

  constructor(
    message: string = 'The requested content type is not supported by the server.',
  ) {
    super(message);
  }
}

export class NotFoundError extends GenericError {
  static statusCode: number = 404;
  public statusCode: number = NotFoundError.statusCode;
  public name: string = 'NotFoundError';

  constructor(message: string = 'The requested resource was not found.') {
    super(message);
  }
}

export class NoRecordError extends GenericError {
  static statusCode: number = 404;
  public statusCode: number = NoRecordError.statusCode;
  public name: string = 'NoRecordError';

  constructor(message: string = 'The requested record does not exist.') {
    super(message);
  }
}

export class ServiceUnavailableError extends GenericError {
  static statusCode: number = 503;
  public statusCode: number = ServiceUnavailableError.statusCode;
  public name: string = 'ServiceUnavailableError';

  constructor(
    message: string = 'Service is currently unavailable. Please try again later.',
  ) {
    super(message);
  }
}

export class UnauthorizedError extends GenericError {
  static statusCode: number = 401;
  public statusCode: number = UnauthorizedError.statusCode;
  public name: string = 'UnauthorizedError';

  constructor(message: string = 'Access denied. Authorization required.') {
    super(message);
  }
}

export class ValidationError<T> extends GenericError {
  static statusCode: number = 400;
  public statusCode: number = ValidationError.statusCode;
  public name: string = 'ValidationError';
  public errors: T[];

  constructor(
    errors: T[],
    message: string = 'The provided data does not meet the required criteria.',
  ) {
    super(message);
    this.errors = errors;
  }

  toJSON() {
    return {
      statusCode: ValidationError.statusCode,
      name: this.name,
      message: this.message,
      errors: this.errors,
    };
  }
}
