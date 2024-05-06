import { ID } from '.'

export type EmployeesVacation = {
  id: ID
  name: string
  surname: string
  patronymic?: string
  avatarThumb: string
  vacations: {
    year: number,
    month: number,
  }[]
}

export type EmployeesVacations = EmployeesVacation[]
