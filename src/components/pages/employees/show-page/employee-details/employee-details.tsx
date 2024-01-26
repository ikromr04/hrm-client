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

  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Персональные данные</Title>
        <EditModal key={employee.id} employee={employee} />
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Национальность': details?.nationality,
            'Дата рождения': details?.birthDate && dayjs(details.birthDate).format('D MMM YYYY'),
            'Пол': details?.gender,
            'Гражданство': details?.citizenship,
            'Адрес': details?.address,
            'Эл. почта': details?.email,
            'Телефон-1': details?.tel1,
            'Телефон-2': details?.tel2,
            'Семейное положение': details?.familyStatus,
            'Дети': details?.children?.map((child) => child).reverse().join(', '),
          }}
        />
      </BoxInner>
    </Box>
  )
}

export default EmployeeDetails
