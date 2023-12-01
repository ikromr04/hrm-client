import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'

function Address(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  return <>{personalData?.address}</>
}

export default Address
