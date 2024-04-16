import { ID } from '.'

export type Equipment = {
  id: ID
  userId: ID
  title: string
  info: string
}

export type Equipments = Equipment[]
