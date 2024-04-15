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

export const filterEmployees = (
  filter: EmployeesFilter,
  employees: Employees
): Employees => employees.filter((employee) =>
  (`${employee.surname} ${employee.name} ${employee.patronymic}`).toLowerCase().includes(filter.name.query.toLowerCase())
  && employee.login.toLowerCase().includes(filter.login.query.toLowerCase())
  && filter.jobs.query.every((jobId) => employee.jobs.map(({ id }) => id).includes(jobId))
  && filter.departments.query.every((departmentId) => employee.departments.map(({ id }) => id).includes(departmentId))
  && filter.positions.query.every((positionId) => employee.positions.map(({ id }) => id).includes(positionId))
  && filter.languages.query.every((langId) => employee.languages.map(({ id }) => id).includes(langId))
  && (filter.languages.level ? employee.languages.some(({ level }) => level.includes(filter.languages.level)) : true)
)
