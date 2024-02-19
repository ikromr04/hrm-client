import { ID } from '@/types'

export type EducationsStoreDTO = {
  user_id: ID
  institution: string
  faculty: string
  speciality: string
  form: string
  started_at: string
  graduated_at: string
}

export type EducationsUpdateDTO = {
  institution?: string
  faculty?: string
  speciality?: string
  form?: string
  started_at?: Date
  graduated_at?: Date
}
