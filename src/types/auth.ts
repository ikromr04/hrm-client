import { ID } from '.'

export type User = {
  id: ID
  name: string
  surname: string
  patronymic?: string
  login: string
  avatar: string
  startedWorkAt: Date
}
