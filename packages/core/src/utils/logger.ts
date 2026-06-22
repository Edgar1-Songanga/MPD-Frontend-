export class Logger {
  static info(message: string, context?: Record<string, any>) {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      message,
      context
    }))
  }

  static error(message: string, error?: Error, context?: Record<string, any>) {
    console.error(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      message,
      error: error?.message,
      context
    }))
  }
}
