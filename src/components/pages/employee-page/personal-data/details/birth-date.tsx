import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'
import dayjs from 'dayjs'

function BirthDate(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  if (!personalData?.birthDate) {
    return <></>
  }

  return <>{dayjs(personalData?.birthDate).format('D MMM YYYY')}</>
}

export default BirthDate
