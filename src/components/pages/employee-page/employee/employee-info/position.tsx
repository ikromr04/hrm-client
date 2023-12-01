import { useAppSelector } from '../../../../../hooks'
import { getEmployee } from '../../../../../store/employee-slice/employees-selector'

function Position(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  return (<>{employee?.positions?.map(({ title }) => title).join(', ')}</>)
}

export default Position
