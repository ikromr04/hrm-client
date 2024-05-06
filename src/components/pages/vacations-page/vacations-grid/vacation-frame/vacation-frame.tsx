import { ReactNode } from 'react'
import { Frame } from './styled'
import { EmployeesVacation } from '@/types/vacations'
import { useAppSelector } from '@/hooks'
import { getUser } from '@/store/auth-slice/auth-selector'

function VacationFrame({
  employee,
  year,
  month,
}: {
  employee: EmployeesVacation,
  year: string
  month: string[]
}): ReactNode {
  const date = employee.vacations.find((vacation) => vacation.split('-')[0] === year)
  const isVacation = date?.split('-')[1] === month[0]
  const user = useAppSelector(getUser)

  if (user?.role.name === 'admin') {
    return (
      <Frame
        isAdmin
        isVacation={isVacation} />
    )
  }

  return <Frame isVacation={isVacation} />
}

export default VacationFrame
