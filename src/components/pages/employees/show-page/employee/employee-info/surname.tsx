import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'

function Surname(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  return (<>{employee?.surname}</>)
}

export default Surname
