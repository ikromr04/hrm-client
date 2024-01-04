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

  if (!employee) {
    return <></>
  }

  const { details } = employee
  const {
    birthDate, gender, nationality, citizenship, address, email, tel1, tel2,
    familyStatus, children
  } = details

  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Персональные данные</Title>
        <EditModal key={employee.id} employee={employee} />
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Дата рождения': birthDate && dayjs(birthDate).format('D MMM YYYY'),
            'Пол': gender,
            'Национальность': nationality,
            'Гражданство': citizenship,
            'Адрес': address,
            'Эл. почта': email,
            'Телефон-1': tel1,
            'Телефон-2': tel2,
            'Семейное положение': familyStatus,
            'Дети': children?.map((child) => child).reverse().join(', '),
          }}
        />
      </BoxInner>
    </Box>
  )
}

export default EmployeeDetails
