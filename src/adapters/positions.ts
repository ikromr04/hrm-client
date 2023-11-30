/* eslint-disable @typescript-eslint/no-explicit-any */
import { Position, Positions } from '../types/position'

export const adaptPositionToClient = (serverData: {[key: string]: any }): Position => ({
  id: serverData.id,
  title: serverData.title,
})

export const adaptPositionsToClient = (serverJobs: {[key: string]: any }[]): Positions =>
  serverJobs.map((serverJob) => adaptPositionToClient(serverJob))
