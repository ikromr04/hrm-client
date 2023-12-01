import dayjs from 'dayjs'
import { useAppSelector } from '../../../../../hooks'
import { getEmployee } from '../../../../../store/employee-slice/employees-selector'

function StartedWorkAt(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  return (<>{dayjs(employee?.startedWorkAt).format('D MMM YYYY')}</>)
}

export default StartedWorkAt
