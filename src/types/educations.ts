import { ID } from '.'

export type Education = {
  id: ID
  userId: ID
  startedAt: Date
  graduatedAt: Date
  institution: string
  faculty: string
  form: string
  speciality: string
}

export type Educations = Education[]
