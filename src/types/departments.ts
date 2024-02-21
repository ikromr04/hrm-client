import { ID } from '.'
import { Employee } from './employees'

export type Department = {
  id: ID
  title: string
  left?: ID
  right?: ID
  parent?: ID
  employees?: (Employee & { leader: boolean })[]
  children?: Departments
}

export type Departments = Department[]
