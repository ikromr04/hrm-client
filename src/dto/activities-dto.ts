import { ID } from '@/types'

export type ActivitiesStoreDTO = {
  user_id: ID
  organization: string
  job: string
  hired_at: string
  dismissed_at: string
}

export type ActivitiesUpdateDTO = {
  organization?: string
  job?: string
  hired_at?: Date
  dismissed_at?: Date
}
