export class ApplicationError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'ApplicationError'
  }
}

export class ValidationError extends ApplicationError {
  constructor(message: string) {
    super('VALIDATION_ERROR', message, 400)
    this.name = 'ValidationError'
  }
}

export class AuthorizationError extends ApplicationError {
  constructor(message: string = 'Unauthorized') {
    super('AUTHORIZATION_ERROR', message, 403)
    this.name = 'AuthorizationError'
  }
}
