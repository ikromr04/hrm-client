import { ID } from '@/types'

export type EmployeesUpdateDTO = {
  name: string
  surname: string
  patronymic?: string
  login: string
  avatar: string
  started_work_at: Date
  jobs?: ID[]
  positions?: ID[]
  languages?: {
    id: ID
    level: string
  }[]
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
}
