import { useAppSelector } from '../../../../../hooks'
import { getEmployeePersonalData } from '../../../../../store/employee-slice/employees-selector'

function FamilyStatus(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  return <>{personalData?.familyStatus}</>
}

export default FamilyStatus
