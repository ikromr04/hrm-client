import DataTable, { DataTableColumns, DataTableRow, DataTableRows } from '@/components/ui/data-table/data-table'
import { useAppDispatch } from '@/hooks'
import { EmployeesEquipments } from '@/types/employees'
import { ReactNode, useState } from 'react'
import Filters from './filters/filters'
import TextLink from '@/components/ui/text-link/text-link'
import { generatePath } from 'react-router-dom'
import { setEmployeeAction } from '@/store/employee-slice/employees-slice'
import { Avatar, Wrapper } from './styled'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { AppRoute } from '@/const'

export type Filter = {
  fieldName: keyof DataTableRow
  query: string
}

function EquipmentsTable({
  employeesEquipments
}: {
  employeesEquipments: EmployeesEquipments
}): ReactNode {
  const dispatch = useAppDispatch()
  const [filter, setFilter] = useState<Filter>({
    fieldName: '',
    query: '',
  })

  const rows: DataTableRows = employeesEquipments.filter((employee) => {
    switch (filter.fieldName) {
      case 'name':
        return `${employee.surname} ${employee.name} ${employee.patronymic}`
          .toLowerCase().includes(filter.query)
      case 'equipments':
        return employee.equipments.map(({ title, info }) => `${title} - ${info}`).join(', ')
          .toLowerCase().includes(filter.query)
      default:
        return true
    }
  }).map((employee, index) => ({
    count: ++index,
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
    equipments: employee.equipments.map(({ title, info }) => <><b>{title}</b>{info ? ` - ${info}` : ''},</>),
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
      field: 'equipments',
      header: <>
        Адрес
        <Filters
          fieldName="equipments"
          filter={filter}
          setFilter={setFilter} />
      </>,
    },
  ]

  return (
    <Wrapper>
      <DataTable
        stickyHeader
        rows={rows}
        columns={columns} />
    </Wrapper>
  )
}

export default EquipmentsTable
