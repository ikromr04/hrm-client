import { ID } from '.'
import { Employee } from './employees'

export type Department = {
  id: ID
  title: string
  employees: (Employee & { leader: boolean })[]
  left: ID
  right: ID
  parent: ID
  children?: Departments
}

export type Departments = Department[]
