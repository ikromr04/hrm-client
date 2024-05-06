import { ReactNode } from 'react'
import { Frame } from './styled'
import { EmployeesVacation } from '@/types/vacations'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getUser } from '@/store/auth-slice/auth-selector'
import { updateVacationAction } from '@/store/vacation-slice/vacation-api-actions'

function VacationFrame({
  employee,
  year,
  month,
}: {
  employee: EmployeesVacation,
  year: number
  month: [number, string]
}): ReactNode {
  const date = employee.vacations.find((vacation) => vacation.year === year)
  const isVacation = date?.month === month[0]
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  const handleDoubleClick = (): void => {
    if (isVacation) {
      dispatch(updateVacationAction({
        dto: {
          user_id: employee.id,
          old_year: year,
          old_month: month[0],
        }
      }))
      return
    }
    dispatch(updateVacationAction({
      dto: {
        user_id: employee.id,
        old_year: year,
        old_month: month[0],
        new_year: year,
        new_month: month[0],
      }
    }))
  }

  if (user?.role.name === 'admin') {
    return (
      <Frame
        isAdmin
        onDoubleClick={handleDoubleClick}
        isVacation={isVacation} />
    )
  }

  return <Frame isVacation={isVacation} />
}

export default VacationFrame
