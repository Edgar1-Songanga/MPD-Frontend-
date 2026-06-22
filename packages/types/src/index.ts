export interface ICompany {
  id: string
  name: string
  legalName: string
  country: string
  taxId: string
  email: string
  status: string
}

export interface IEmployee {
  id: string
  companyId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  department: string
  jobTitle: string
  status: string
}
