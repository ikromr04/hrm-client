import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'

function Patronymic(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  return (<>{employee?.patronymic}</>)
}

export default Patronymic
