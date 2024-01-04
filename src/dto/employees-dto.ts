import { ID } from '@/types'

export type EmployeesUpdateDTO = {
  name?: string
  surname?: string
  patronymic?: string
  login?: string
  started_work_at?: Date
  jobs?: ID[]
  positions?: ID[]
  languages?: {
    id: ID
    level: string
  }[]
  details?: {
    birth_date?: Date
    gender?: string
    nationality?: string
    citizenship?: string
    address?: string
    email?: string
    tel_1?: string
    tel_2?: string
    family_status?: string
    children?: string[]
  }
}
