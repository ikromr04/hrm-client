import { Employees } from '@/types/employees'
import dayjs from 'dayjs'
import Accent from '../accent/accent'
import DataTable, { DataTableColumns, DataTableRows } from '../data-table/data-table'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import { useAppDispatch } from '@/hooks'
import { setEmployeeAction } from '@/store/employee-slice/employees-slice'
import TextLink from '../text-link/text-link'
import { ReactNode } from 'react'
import { Avatar } from './styled'
import defaultAvatar from '@/assets/static/default-avatar.png'

function EmployeesTable({
  employees
}: {
  employees: Employees
}): ReactNode {
  const dispatch = useAppDispatch()

  const rows: DataTableRows = employees.map((employee, index) => ({
    count: ++index,
    startedWorkAt: dayjs(employee.startedWorkAt).format('D MMM YYYY').toString(),
    avatar: <Avatar
      src={employee.avatarThumb}
      alt={employee.name}
      width={144}
      height={144}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = defaultAvatar
      }} />,
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
    departments: employee.departments.map(({ title }) => title).join(', '),
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

  const columns: DataTableColumns = [
    { field: 'count', headerName: '№', width: 56 },
    { field: 'avatar', headerName: 'Аватар', width: 96 },
    { field: 'name', headerName: 'ФИО', width: 300 },
    { field: 'departments', headerName: 'Отдел/Департамент', width: 240 },
    { field: 'jobs', headerName: 'Должность', width: 240 },
    { field: 'positions', headerName: 'Позиция', width: 240 },
    { field: 'login', headerName: 'Логин', width: 240 },
    { field: 'email', headerName: 'Эл. почта', width: 248 },
    { field: 'tel', headerName: 'Телефон', width: 144 },
    { field: 'startedWorkAt', headerName: 'Начало работы', width: 160 },
    { field: 'languages', headerName: 'Знание языков', width: 240 },
    { field: 'birthDate', headerName: 'Дата рождения', width: 160 },
    { field: 'nationality', headerName: 'Национальность', width: 160 },
    { field: 'citizenship', headerName: 'Гражданство', width: 160 },
    { field: 'gender', headerName: 'Пол', width: 120 },
    { field: 'familyStatus', headerName: 'Семейное положение', width: 200 },
    { field: 'children', headerName: 'Дети', width: 120 },
    { field: 'address', headerName: 'Адрес', width: 560 },
  ]

  return (
    <DataTable
      stickyHeader
      rows={rows}
      columns={columns} />
  )
}

export default EmployeesTable
