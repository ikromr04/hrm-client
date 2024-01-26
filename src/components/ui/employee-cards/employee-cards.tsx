import { Employees } from '@/types/employees'
import { List, ListItem } from './styled'
import EmployeesCard from '../employees-card/employees-card'

type EmployeeCardsProps = {
  employees: Employees
}

function EmployeeCards({ employees }: EmployeeCardsProps): JSX.Element {
  return (
    <List>
      {employees.map((employee) => (
        <ListItem key={employee.id}>
          <EmployeesCard employee={employee} />
        </ListItem>
      ))}
    </List>
  )
}

export default EmployeeCards