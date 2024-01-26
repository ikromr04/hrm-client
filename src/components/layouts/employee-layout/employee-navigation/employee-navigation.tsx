import { generatePath } from 'react-router-dom'
import { List, ListItem } from './styled'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { AppRoute } from '@/const'
import EmployeeLink from './employee-link/employee-link'

function EmployeeNavigation(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  return (
    <List>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.Show, { id: employee.id })}>
          Профиль
        </EmployeeLink>
      </ListItem>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.Education, { id: employee.id })}>
          Образование
        </EmployeeLink>
      </ListItem>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.Work, { id: employee.id })}>
          Работа
        </EmployeeLink>
      </ListItem>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.Equipment, { id: employee.id })}>
          Оборудование
        </EmployeeLink>
      </ListItem>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.Vacation, { id: employee.id })}>
          Отпуск
        </EmployeeLink>
      </ListItem>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.PIR, { id: employee.id })}>
          ПИР
        </EmployeeLink>
      </ListItem>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.KPI, { id: employee.id })}>
          KPI
        </EmployeeLink>
      </ListItem>
      <ListItem>
        <EmployeeLink href={generatePath(AppRoute.Employees.Attendance, { id: employee.id })}>
          Посещаемость
        </EmployeeLink>
      </ListItem>
    </List>
  )
}

export default EmployeeNavigation
