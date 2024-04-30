import { Employees } from '@/types/employees'
import dayjs from 'dayjs'
import Accent from '../accent/accent'
import DataTable, { DataTableColumns, DataTableRow, DataTableRows } from '../data-table/data-table'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import { useAppDispatch } from '@/hooks'
import { setEmployeeAction } from '@/store/employee-slice/employees-slice'
import TextLink from '../text-link/text-link'
import { ReactNode, useState } from 'react'
import { Avatar } from './styled'
import defaultAvatar from '@/assets/static/default-avatar.png'
import Filters from './filters/filters'

export type Filter = {
  fieldName: keyof DataTableRow
  query: string
}

function EmployeesTable({
  employees
}: {
  employees: Employees
}): ReactNode {
  const dispatch = useAppDispatch()
  const [filter, setFilter] = useState<Filter>({
    fieldName: '',
    query: '',
  })

  const rows: DataTableRows = employees.filter((employee) => {
    switch (filter.fieldName) {
      case 'name':
        return `${employee.surname} ${employee.name} ${employee.patronymic}`
          .toLowerCase().includes(filter.query)
      case 'departments':
        return employee.departments.map(({ title }) => title).join(' ')
          .toLowerCase().includes(filter.query)
      case 'jobs':
        return employee.jobs.map(({ title }) => title).join(' ')
          .toLowerCase().includes(filter.query)
      case 'positions':
        return employee.positions.map(({ title }) => title).join(' ')
          .toLowerCase().includes(filter.query)
      case 'login':
        return employee.login.toLowerCase().includes(filter.query)
      case 'email':
        return employee.details?.email?.toLowerCase().includes(filter.query)
      case 'tel':
        return employee.details?.tel1?.split(' ').join('').includes(filter.query)
          || employee.details?.tel2?.split(' ').join('').includes(filter.query)
      case 'languages':
        return employee.languages.map(({ name }) => name).join(' ')
          .toLowerCase().includes(filter.query)
      case 'nationality':
        return employee.details?.nationality?.toLowerCase().includes(filter.query)
      case 'citizenship':
        return employee.details?.citizenship?.toLowerCase().includes(filter.query)
      case 'gender':
        return employee.details?.gender?.toLowerCase().includes(filter.query)
      case 'familyStatus':
        return employee.details?.familyStatus?.toLowerCase().includes(filter.query)
      case 'address':
        return employee.details?.address?.toLowerCase().includes(filter.query)
      default:
        return true
    }
  }).map((employee, index) => ({
    count: ++index,
    startedWorkAt: dayjs(employee.startedWorkAt).format('D MMM YYYY').toString(),
    name:
      <TextLink
        href={generatePath(AppRoute.Employees.Show, { id: employee.id })}
        onClick={() => dispatch(setEmployeeAction(null))}
      >
        {employee.surname} {employee.name} {employee.patronymic || ''}
      </TextLink>,
    avatar: <Avatar
      src={employee.avatarThumb}
      alt={employee.name}
      width={144}
      height={144}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = defaultAvatar
      }} />,
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
    { field: 'count', header: '№', width: 56 },
    { field: 'avatar', header: 'Аватар', width: 96 },
    {
      field: 'name',
      header: <>
        ФИО
        <Filters
          fieldName="name"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 300
    },
    {
      field: 'departments',
      header: <>
        Отдел/Департамент
        <Filters
          fieldName="departments"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 240
    },
    {
      field: 'jobs',
      header: <>
        Должность
        <Filters
          fieldName="jobs"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 240
    },
    {
      field: 'positions',
      header: <>
        Позиция
        <Filters
          fieldName="positions"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 240
    },
    {
      field: 'login',
      header: <>
        Логин
        <Filters
          fieldName="login"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 240
    },
    {
      field: 'email',
      header: <>
        Эл. почта
        <Filters
          fieldName="email"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 248
    },
    {
      field: 'tel',
      header: <>
        Телефон
        <Filters
          fieldName="tel"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 144
    },
    { field: 'startedWorkAt', header: 'Начало работы', width: 160 },
    {
      field: 'languages',
      header: <>
        Знание языков
        <Filters
          fieldName="languages"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 240
    },
    { field: 'birthDate', header: 'Дата рождения', width: 160 },
    {
      field: 'nationality',
      header: <>
        Национальность
        <Filters
          fieldName="nationality"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 160
    },
    {
      field: 'citizenship',
      header: <>
        Гражданство
        <Filters
          fieldName="citizenship"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 160
    },
    {
      field: 'gender',
      header: <>
        Пол
        <Filters
          fieldName="gender"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 120
    },
    {
      field: 'familyStatus',
      header: <>
        Семейное положение
        <Filters
          fieldName="familyStatus"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 200
    },
    { field: 'children', header: 'Дети', width: 120 },
    {
      field: 'address',
      header: <>
        Адрес
        <Filters
          fieldName="address"
          filter={filter}
          setFilter={setFilter} />
      </>,
      width: 560
    },
  ]

  return (
    <DataTable
      stickyHeader
      rows={rows}
      columns={columns} />
  )
}

export default EmployeesTable
