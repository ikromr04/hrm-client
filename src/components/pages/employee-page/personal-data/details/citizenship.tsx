import { useAppSelector } from '../../../../../hooks'
import { getEmployeePersonalData } from '../../../../../store/employee-slice/employees-selector'

function Citizenship(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  return <>{personalData?.citizenship}</>
}

export default Citizenship
