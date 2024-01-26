import Box from '@/components/ui/box/box'
import Title from '@/components/ui/title/title'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import BoxInner from '@/components/ui/box-inner/box-inner'
import DescriptionList from '@/components/ui/description-list/description-list'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import dayjs from 'dayjs'
import EditModal from './edit-modal/edit-modal'

function EmployeeInfo(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Сотрудник</Title>
        <EditModal key={employee.id} employee={employee} />
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Фамилия': employee.surname,
            'Имя': employee.name,
            'Отчество': employee.patronymic,
            'Логин': employee.login,
            'Начало работы': dayjs(employee.startedWorkAt).format('D MMM YYYY').toString(),
            'Должность': employee.jobs.map(({ title }) => title).join(', '),
            'Позиция': employee.positions.map(({ title }) => title).join(', '),
          }}
        />
      </BoxInner>
    </Box>
  )
}

export default EmployeeInfo
