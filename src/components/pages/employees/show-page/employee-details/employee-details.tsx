import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import Title from '@/components/ui/title/title'
import BoxInner from '@/components/ui/box-inner/box-inner'
import DescriptionList from '@/components/ui/description-list/description-list'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import dayjs from 'dayjs'
import EditModal from './edit-modal/edit-modal'

function EmployeeDetails(): JSX.Element {
  const employee = useAppSelector(getEmployee)
  let children = ''
  if (Array.isArray(employee?.details?.children)) {
    children = employee?.details?.children?.map((date) => date).join(', ')
    if (children?.length === 0) {
      children = 'Нет'
    }
  }

  if (!employee) {
    return <></>
  }

  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Персональные данные</Title>
        <EditModal key={employee.id} employee={employee} />
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Дата рождения': dayjs(employee.details.birthDate).format('D MMM YYYY'),
            'Пол': employee.details.gender,
            'Национальность': employee.details.nationality,
            'Гражданство': employee.details.citizenship,
            'Адрес': employee.details.address,
            'Эл. почта': employee.details.email,
            'Телефон-1': employee.details.tel1,
            'Телефон-2': employee.details.tel2,
            'Семейное положение': employee.details.familyStatus,
            'Дети': children,
          }}
        />
      </BoxInner>
    </Box>
  )
}

export default EmployeeDetails
