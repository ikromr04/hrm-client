import { ID } from '@/types'

export type EquipmentsStoreDTO = {
  user_id: ID
  title: string
  info: string
}

export type EquipmentsUpdateDTO = {
  title?: string
  info?: string
}
