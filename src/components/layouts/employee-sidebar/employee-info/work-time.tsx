import { useAppSelector } from '../../../../hooks'
import { getEmployee } from '../../../../store/employees-slice/employees-selector'
import { getWorkTime } from '../../../../utils'

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
