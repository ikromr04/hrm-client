import dayjs from 'dayjs'
import { useAppSelector } from '../../../../hooks'
import { getEmployee } from '../../../../store/employees-slice/employees-selector'

function StartedWorkAt(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  return (
    <>{dayjs(employee.startedWorkAt).format('D MMM YYYY')}</>
  )
}

export default StartedWorkAt
