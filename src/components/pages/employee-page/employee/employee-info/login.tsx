import { useAppSelector } from '../../../../../hooks'
import { getEmployee } from '../../../../../store/employees-slice/employees-selector'

function Login(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  return (<>{employee?.login}</>)
}

export default Login
