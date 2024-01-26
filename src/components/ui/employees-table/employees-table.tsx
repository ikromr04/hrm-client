import { Employees } from '@/types/employees'
import dayjs from 'dayjs'
import Accent from '../accent/accent'
import DataTable, { DataTableColumns, DataTableRows } from '../data-table/data-table'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setEmployeeAction } from '@/store/employee-slice/employees-slice'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import TextLink from '../text-link/text-link'

type EmployeesTableProps = {
  employees: Employees
}

function EmployeesTable({ employees }: EmployeesTableProps): JSX.Element {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(getEmployeesFilter)

  let rows: DataTableRows = employees.map((employee, index) => ({
    count: ++index,
    startedWorkAt: dayjs(employee.startedWorkAt).format('D MMM YYYY').toString(),
    name:
      <TextLink
        href={generatePath(AppRoute.Employees.Show, { id: employee.id })}
        onClick={() => dispatch(setEmployeeAction(null))}
      >
        {employee.surname} {employee.name} {employee.patronymic || ''}
      </TextLink>,
    login: employee.login,
    positions: employee.positions.map(({ id, title }) => <Accent key={id}>{title}</Accent>),
    jobs: employee.jobs.map(({ title }) => title).join(', '),
    languages: employee.languages.map(({ name }) => name).join(', '),
    birthDate: employee.details?.birthDate ? dayjs(employee.details.birthDate).format('D MMM YYYY') : '',
    nationality: employee.details?.nationality,
    citizenship: employee.details?.citizenship,
    gender: employee.details?.gender,
    email:
      <TextLink href={`mailto:${employee.details?.email}`}>
        {employee.details?.email}
      </TextLink>,
    tel: 
      <div>
        {employee.details?.tel1 && <>
          <TextLink href={`tel:${employee.details?.tel1}`}>{employee.details?.tel1}</TextLink> <br />
        </>}
        {employee.details?.tel2 && <TextLink href={`tel:${employee.details?.tel2}`}>{employee.details?.tel2}</TextLink>}
      </div>,
    familyStatus: employee.details?.familyStatus,
    children: employee.details?.children?.map((child) => child).reverse().join(', '),
    address: employee.details?.address,
  }))

  let columns: DataTableColumns = [
    { field: 'count', headerName: '№', width: 56 },
    { field: 'startedWorkAt', headerName: 'Начало работы', width: 160 },
    { field: 'name', headerName: 'ФИО', width: 300 },
    { field: 'login', headerName: 'Логин', width: 264 },
    { field: 'positions', headerName: 'Позиция', width: 264 },
    { field: 'jobs', headerName: 'Должность', width: 240 },
    { field: 'languages', headerName: 'Знание языков', width: 240 },
    { field: 'birthDate', headerName: 'Дата рождения', width: 160 },
    { field: 'nationality', headerName: 'Национальность', width: 160 },
    { field: 'citizenship', headerName: 'Гражданство', width: 160 },
    { field: 'gender', headerName: 'Пол', width: 120 },
    { field: 'email', headerName: 'Эл. почта', width: 264 },
    { field: 'tel', headerName: 'Телефон', width: 144 },
    { field: 'familyStatus', headerName: 'Семейное положение', width: 200 },
    { field: 'children', headerName: 'Дети', width: 120 },
    { field: 'address', headerName: 'Адрес', width: 560 },
  ]

  const filters = [...Object.entries(filter), ...Object.entries(filter.details)]

  filters.forEach(([filterKey, filterValue]) => {
    rows = rows.map((row) => {
      if (
        (filterKey in row)
        && (typeof filterValue === 'object')
        && ('isShown' in filterValue)
        && !filterValue.isShown
      ) {
        delete row[filterKey]
        columns = columns.filter(({ field }) => field !== filterKey)
      }
      return row
    })
  });

  return (
    <DataTable
      stickyHeader
      rows={rows}
      columns={columns} />
  )
}

export default EmployeesTable