import { ID } from '.'
import { Jobs } from './jobs'
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
  languages: {
    id: ID
    name: string
    level: string
  }[]
  details: {
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
}

export type Employees = Employee[]
