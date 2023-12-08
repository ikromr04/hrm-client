import { generatePath } from 'react-router-dom'
import { StyledNavigation } from './styled'
import NavigationLink from './navigation-link/navigation-link'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { AppRoute } from '@/const'

function Navigation(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  return (
    <StyledNavigation>
      <NavigationLink 
        href={generatePath(AppRoute.Employees.Show, { employeeId: employee.id })}
      >
        Профиль
      </NavigationLink>
      <NavigationLink 
        href={generatePath(AppRoute.Employees.Work, { employeeId: employee.id })}
      >
        Работа
      </NavigationLink>
      <NavigationLink 
        href={generatePath(AppRoute.Employees.Equipment, { employeeId: employee.id })}
      >
        Оборудование
      </NavigationLink>
      <NavigationLink 
        href={generatePath(AppRoute.Employees.Vacation, { employeeId: employee.id })}
      >
        Отпуск
      </NavigationLink>
      <NavigationLink 
        href={generatePath(AppRoute.Employees.PIR, { employeeId: employee.id })}
      >
        ПИР
      </NavigationLink>
      <NavigationLink 
        href={generatePath(AppRoute.Employees.KPI, { employeeId: employee.id })}
      >
        KPI
      </NavigationLink>
      <NavigationLink 
        href={generatePath(AppRoute.Employees.Attendance, { employeeId: employee.id })}
      >
        Посещаемость
      </NavigationLink>
    </StyledNavigation>
  )
}

export default Navigation
