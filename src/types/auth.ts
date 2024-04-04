import { ID } from '.'

export type User = {
  id: ID
  name: string
  surname: string
  patronymic?: string
  login: string
  avatar: string
  avatarThumb: string
  startedWorkAt: Date
  role: {
    id: ID
    name: string
    displayName: string
  }
}
