import { ID } from '.'
import { Departments } from './departments'
import { Jobs } from './jobs'
import { Language } from './languages'
import { Positions } from './positions'

export type Employee = {
  id: ID
  name: string
  surname: string
  patronymic?: string
  login: string
  avatar: string
  avatarThumb: string
  startedWorkAt: Date
  departments: Departments
  jobs: Jobs
  positions: Positions
  languages: EmployeeLanguages
  details?: {
    birthDate?: Date
    gender?: string
    nationality?: string
    citizenship?: string
    address?: string
    email?: string
    tel1?: string
    tel2?: string
    familyStatus?: string
    children?: string[]
  }
  next: ID
  previous: ID
}

export type Employees = Employee[]

export type EmployeeLanguage = Language & { level: string }

export type EmployeeLanguages = EmployeeLanguage[]

export type EmployeesFilter = {
  order: {
    by: string
    type: string
  }
  name: {
    isShown: boolean
    query: string
  }
  login: {
    isShown: boolean
    query: string
  }
  jobs: {
    isShown: boolean
    query: ID[]
  }
  positions: {
    isShown: boolean
    query: ID[]
  }
  languages: {
    isShown: boolean
    query: ID[]
    level: string
  }
  details: EmployeesDetailsFilter
}

export type EmployeesDetailsFilter = {
  isShown: boolean
  startedWorkAt: {
    isShown: boolean
    from: string
    to: string
  }
  nationality: {
    isShown: boolean
    query: string
  }
  birthDate: {
    isShown: boolean
    from: string
    to: string
  }
  gender: {
    isShown: boolean
    query: string
  }
  address: {
    isShown: boolean
    query: string
  }
  citizenship: {
    isShown: boolean
    query: string
  }
  email: {
    isShown: boolean
    query: string
  }
  tel: {
    isShown: boolean
    query: string
  }
  familyStatus: {
    isShown: boolean
    query: string
  }
  children: {
    isShown: boolean
    query: string[]
    quantity: number | null
  }
}
