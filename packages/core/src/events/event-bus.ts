import type { DomainEvent } from '../types/index.js'

export class EventBus {
  private handlers = new Map<string, Function[]>()

  subscribe(eventType: string, handler: (event: DomainEvent) => Promise<void>) {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, [])
    }
    this.handlers.get(eventType)!.push(handler)
  }

  async publish(event: DomainEvent) {
    const handlers = this.handlers.get(event.type) || []
    for (const handler of handlers) {
      try {
        await handler(event)
      } catch (error) {
        console.error(`Error handling event ${event.type}:`, error)
      }
    }
  }
}

export const eventBus = new EventBus()
