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
  next?: ID
  previous?: ID
}

export type Employees = Omit<Employee, 'next' | 'previous'>[]

export type EmployeeLanguage = Language & { level: string }

export type EmployeeLanguages = EmployeeLanguage[]

export type EmployeesFilter = {
  name: {
    isShown: boolean
    query: string
  }
  login: {
    isShown: boolean
    query: string
  }
  departments: {
    isShown: boolean
    query: ID[]
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
}

export type EmployeesEquipments = {
  id: ID
  name: string
  surname: string
  patronymic: string
  avatarThumb: string
  equipments: {
    title: string
    info?: string
  }[]
}[]
