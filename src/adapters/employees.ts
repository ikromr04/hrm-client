/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Activities,
  Activity,
  AuthorizedEmployee,
  Education,
  Educations,
  Employee,
  EmployeeLanguage,
  EmployeeLanguages,
  Employees,
  PersonalData
} from '../types/employee'
import { adaptJobsToClient } from './jobs'
import { adaptPositionsToClient } from './positions'

export const adaptAuthorizedEmployeeToClient = (serverEmployee: any): AuthorizedEmployee => ({
  id: serverEmployee.id,
  name: serverEmployee.name,
  surname: serverEmployee.surname,
  avatar: serverEmployee.avatar,
})

export const adaptEmployeeToClient = (serverEmployee: any): Employee => ({
  id: serverEmployee.id,
  name: serverEmployee.name,
  surname: serverEmployee.surname,
  patronymic: serverEmployee.patronymic,
  login: serverEmployee.login,
  avatar: serverEmployee.avatar,
  previousEmployeeId: serverEmployee.previous_employee_id,
  nextEmployeeId: serverEmployee.next_employee_id,
  startedWorkAt: serverEmployee.started_work_at,
  jobs: serverEmployee.jobs?.length ? adaptJobsToClient(serverEmployee.jobs) : null,
  positions: serverEmployee.positions?.length ? adaptPositionsToClient(serverEmployee.positions) : null,
  languages: serverEmployee.languages?.length ? adaptEmployeeLanguages(serverEmployee.languages) : null,
})

export const adaptEmployeesToClient = (serverEmployees: any): Employees =>
  serverEmployees.map((serverEmployee: any) => adaptEmployeeToClient(serverEmployee))

export const adaptPersonalDataToClient = (serverData: {[key: string]: any }): PersonalData => ({
  id: serverData.id,
  userId: serverData.user_id,
  birthDate: serverData.birth_date,
  gender: serverData.gender,
  nationality: serverData.nationality,
  citizenship: serverData.citizenship,
  address: serverData.address,
  email: serverData.email,
  tel1: serverData.tel_1,
  tel2: serverData.tel_2,
  familyStatus: serverData.family_status,
  children: serverData.children,
})

export const adaptEmployeeEducationToClient = (serverEducation: {[key: string]: any }): Education => ({
  id: serverEducation.id,
  userId: serverEducation.user_id,
  startedAt: serverEducation.started_at,
  graduatedAt: serverEducation.graduated_at,
  institution: serverEducation.institution,
  faculty: serverEducation.faculty,
  form: serverEducation.form,
  speciality: serverEducation.speciality,
})

export const adaptEmployeeEducationsToClient = (serverEducations: {[key: string]: any }[]): Educations =>
  serverEducations.map((serverEducation) => adaptEmployeeEducationToClient(serverEducation))

export const adaptEmployeeLanguage = (serverLanguage: {[key: string]: any }): EmployeeLanguage => ({
  id: serverLanguage.id,
  name: serverLanguage.name,
  level: serverLanguage.pivot.level,
})

export const adaptEmployeeLanguages = (serverLanguages: {[key: string]: any }[]): EmployeeLanguages | null => {
  if (!serverLanguages.length) {
    return null
  }
  return serverLanguages.map((serverLanguage) => adaptEmployeeLanguage(serverLanguage))
}

export const adaptEmployeeActivityToClient = (serverActivity: {[key: string]: any }): Activity => ({
  id: serverActivity.id,
  userId: serverActivity.user_id,
  hiredAt: serverActivity.hired_at,
  dismissedAt: serverActivity.dismissed_at,
  organization: serverActivity.organization,
  job: serverActivity.job,
})

export const adaptEmployeeActivitiesToClient = (serverActivities: {[key: string]: any }[]): Activities =>
  serverActivities.map((serverActivity) => adaptEmployeeActivityToClient(serverActivity))
