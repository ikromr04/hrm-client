import { ID } from '.'
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
  startedWorkAt: Date
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
    children?: string
  }
  next: ID
  previous: ID
}

export type Employees = Employee[]

export type EmployeeLanguage = Language & { level: string }

export type EmployeeLanguages = EmployeeLanguage[]
