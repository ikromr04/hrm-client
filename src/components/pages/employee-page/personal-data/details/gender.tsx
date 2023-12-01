import { useAppSelector } from '../../../../../hooks'
import { getEmployeePersonalData } from '../../../../../store/employee-slice/employees-selector'

function Gender(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  return <>{personalData?.gender}</>
}

export default Gender
