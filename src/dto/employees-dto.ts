import { ID } from '@/types'
import { EmployeeLanguages } from '@/types/employees'

export type EmployeesUpdateDTO = {
  name?: string
  surname?: string
  patronymic?: string
  login?: string
  started_work_at?: Date
  departments?: ID[]
  jobs?: ID[]
  positions?: ID[]
  languages?: EmployeeLanguages
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

export type EmployeesStoreDTO = {
  name: string
  surname: string
  patronymic?: string
  login: string
  started_work_at?: Date
  departments?: ID[]
  jobs?: ID[]
  positions?: ID[]
  languages?: EmployeeLanguages
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

