import { ID } from '.'

export type EmployeesVacation = {
  id: ID
  name: string
  surname: string
  patronymic?: string
  avatarThumb: string
  vacations: string[]
}

export type EmployeesVacations = EmployeesVacation[]
