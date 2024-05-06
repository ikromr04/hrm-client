import { ID } from '@/types'

export type VacationsUpdateDTO = {
  user_id: ID
  old_year: number
  old_month: number
  new_year?: number
  new_month?: number
}
