import { ID } from '.'

export type Activity = {
  id: ID
  userId: ID
  organization: string
  job: string
  hiredAt: Date
  dismissedAt: Date
}

export type Activities = Activity[]