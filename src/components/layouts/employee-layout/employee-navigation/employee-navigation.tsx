import { generatePath } from 'react-router-dom'
import { Navigation } from './styled'
import { AppRoute } from '../../../../const'
import { memo } from 'react'
import NavigationLink from './navigation-link/navigation-link'
import { useAppSelector } from '../../../../hooks'
import { getEmployee } from '../../../../store/employees-slice/employees-selector'

function EmployeeNavigation(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  return (
    <Navigation>
      <NavigationLink href={generatePath(AppRoute.Employees.Show, { employeeId: employee.id })}>
        Профиль
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.Employees.Work, { employeeId: employee.id })}>
        Работа
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.Employees.Equipment, { employeeId: employee.id })}>
        Оборудование
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.Employees.Vacation, { employeeId: employee.id })}>
        Отпуск
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.Employees.PIR, { employeeId: employee.id })}>
        ПИР
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.Employees.KPI, { employeeId: employee.id })}>
        KPI
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.Employees.Attendance, { employeeId: employee.id })}>
        Посещаемость
      </NavigationLink>
    </Navigation>
  )
}

export default memo(EmployeeNavigation)
