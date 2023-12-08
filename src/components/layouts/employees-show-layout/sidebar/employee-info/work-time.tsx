import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { getWorkTime } from '@/utils'

function WorkTime(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  return (
    <>{getWorkTime(employee.startedWorkAt)}</>
  )
}

export default WorkTime
