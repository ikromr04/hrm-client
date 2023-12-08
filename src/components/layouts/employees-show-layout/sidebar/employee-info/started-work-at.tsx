import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import dayjs from 'dayjs'

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
