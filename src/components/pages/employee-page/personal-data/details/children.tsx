import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'

function Children(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  return <>{personalData?.children}</>
}

export default Children
