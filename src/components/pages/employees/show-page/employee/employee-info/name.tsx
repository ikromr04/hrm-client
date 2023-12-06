import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'

function Name(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  return (<>{employee?.name}</>)
}

export default Name
