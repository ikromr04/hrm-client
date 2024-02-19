import { Employees } from '@/types/employees'
import { List, ListItem } from './styled'
import EmployeesCard from '../employees-card/employees-card'
import { ReactNode } from 'react'

function EmployeeCards({
  employees
}: {
  employees: Employees
}): ReactNode {
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
