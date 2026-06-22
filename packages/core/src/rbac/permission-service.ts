import type { RequestContext } from '../types/index.js'

export class PermissionService {
  async checkPermission(
    context: RequestContext,
    action: string,
    resource: string
  ): Promise<boolean> {
    const permission = `${resource}:${action}`
    return context.permissions.includes(permission)
  }

  async checkRole(context: RequestContext, role: string): Promise<boolean> {
    return context.userRoles.includes(role)
  }
}
