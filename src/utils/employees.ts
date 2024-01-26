import { Employees, EmployeesFilter } from '@/types/employees'
import dayjs from 'dayjs'

export const getWorkTime = (startedTime: Date): string => {
  const date = dayjs()
  const years = Math.floor(date.diff(startedTime, 'year', true))
  const months = Math.floor(date.diff(startedTime, 'month', true)) % 12
  const days = Math.floor(date.diff(startedTime, 'day', true) % 365 % 30.5)

  return `${years}г ${months}м ${days}д`
}

export const getYears = (from: number): string[] => {
  const years = []
  const currentYear = +dayjs().format('YYYY')

  for (let year = from; year <= currentYear; year++) {
    years.unshift(year.toString())
  }
  return years
}



export const filterEmployees = (filter: EmployeesFilter, employees: Employees): Employees =>
  employees.filter((employee) =>
    (`${employee.surname} ${employee.name} ${employee.patronymic}`).toLowerCase().includes(filter.name.query.toLowerCase())
    && employee.login.toLowerCase().includes(filter.login.query.toLowerCase())
    && filter.jobs.query.every((jobId) => employee.jobs.map(({ id }) => id).includes(jobId))
    && filter.positions.query.every((positionId) => employee.positions.map(({ id }) => id).includes(positionId))
    && filter.languages.query.every((langId) => employee.languages.map(({ id }) => id).includes(langId))
    && (filter.languages.level ? employee.languages.some(({ level }) => level.includes(filter.languages.level)) : true)
    && (new Date(employee.startedWorkAt) >= new Date(filter.details.startedWorkAt.from || '1900-01-18T12:33'))
    && (new Date(employee.startedWorkAt) <= new Date(filter.details.startedWorkAt.to || '2324-01-18T12:33'))
    && (filter.details.nationality.query ? employee.details?.nationality?.toLowerCase().includes(filter.details.nationality.query.toLowerCase()) : true)
    && (filter.details.birthDate.from ? (employee.details?.birthDate && (new Date(employee.details.birthDate) >= new Date(filter.details.birthDate.from || '1900-01-18T12:33'))) : true)
    && (filter.details.birthDate.to ? (employee.details?.birthDate && (new Date(employee.details.birthDate) <= new Date(filter.details.birthDate.to || '2324-01-18T12:33'))) : true)
    && (filter.details.gender.query ? (employee.details?.gender === filter.details.gender.query) : true)
    && (filter.details.citizenship.query ? employee.details?.citizenship?.toLowerCase().includes(filter.details.citizenship.query.toLowerCase()) : true)
    && (filter.details.email.query ? employee.details?.email?.toLowerCase().includes(filter.details.email.query.toLowerCase()) : true)
    && (filter.details.tel.query ? (employee.details?.tel1?.toLowerCase().includes(filter.details.tel.query.toLowerCase()) || employee.details?.tel2?.toLowerCase().includes(filter.details.tel.query.toLowerCase())) : true)
    && (filter.details.familyStatus.query ? (employee.details?.familyStatus === filter.details.familyStatus.query) : true)
    && filter.details.children.query.every((year) => employee.details?.children?.map((child) => child).includes(year))
    && (filter.details.children.quantity ? (employee.details?.children?.filter((year) => !isNaN(+year)).length === +filter.details.children.quantity) : true)
  )
