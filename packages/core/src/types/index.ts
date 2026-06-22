export interface RequestContext {
  tenantId: string
  userId: string
  userEmail: string
  userRoles: string[]
  permissions: string[]
  traceId: string
  correlationId: string
  timestamp: Date
  ipAddress: string
  userAgent: string
}

export interface DomainEvent {
  id: string
  type: string
  aggregateId: string
  aggregateType: string
  data: Record<string, any>
  timestamp: Date
  version: number
  causedBy: string
  correlationId: string
}
