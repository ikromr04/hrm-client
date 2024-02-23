import { ID } from '@/types'

export type DepartmentsStoreDTO = {
  title: string
  parent_id?: ID
  leaders: ID[]
  employees: ID[]
  children?: ID[]
}

export type DepartmentsUpdateDTO = {
  title?: string
  parent_id?: ID
  leaders: ID[]
  employees: ID[]
  children?: ID[]
}
