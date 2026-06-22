import type { RequestContext } from '@magestade/core'

export class CreateEmployeeUseCase {
  constructor(
    private employeeService: any,
    private eventBus: any
  ) {}

  async execute(context: RequestContext, input: CreateEmployeeInput) {
    // Validate permission
    // Create employee
    // Publish event
    const employee = await this.employeeService.createEmployee({
      companyId: context.tenantId,
      ...input
    })

    await this.eventBus.publish({
      type: 'employee.created',
      aggregateId: employee.id,
      data: employee
    })

    return employee
  }
}

export interface CreateEmployeeInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  department: string
  jobTitle: string
}
