/* eslint-disable @typescript-eslint/no-explicit-any */
import { Job, Jobs } from '../types/job'

export const adaptJobToClient = (serverData: {[key: string]: any }): Job => ({
  id: serverData.id,
  title: serverData.title,
})

export const adaptJobsToClient = (serverJobs: {[key: string]: any }[]): Jobs => 
  serverJobs.map((serverJob) => adaptJobToClient(serverJob))
