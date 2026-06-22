export * from './logger.js'

export function generateId(): string {
  return crypto.randomUUID()
}
