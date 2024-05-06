import { EmployeesVacations } from '@/types/vacations'
import { SliceName } from '../../const'
import { State } from '../../types/state'

export const getEmployeesVacations = (state: State): EmployeesVacations | null =>
  state[SliceName.Vacation].employeesVacations
