import { JobId } from '../types/job'
import { PositionId } from '../types/position'

export type EmployeeQuickAddDTO = {
  name: string
  surname: string
  patronymic: string
  login: string
}

export type EmployeeUpdateDTO = {
  name: string
  surname: string
  patronymic: string
  login: string
  started_work_at: Date
  jobs: JobId[]
  positions: PositionId[]
}
