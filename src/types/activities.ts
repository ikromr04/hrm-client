import { ID } from '.'

export type Activity = {
  id: ID
  userId: ID
  hiredAt: Date
  dismissedAt: Date
  organization: string
  job: string
}

export type Activities = Activity[]