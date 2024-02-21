import { Departments } from '@/types/departments'
import { ReactNode } from 'react'
import { Hr, List, ListItem } from './styled'
import DepartmentCard from '@/components/ui/department-card/department-card'

function DepartmentsList({
  departments,
}: {
  departments: Departments
}): ReactNode {

  if (departments.length == 0) {
    return <></>
  }

  return (
    <>
      <Hr />
      <List>
        {departments.map((department) => (
          <ListItem key={department.id}>
            <DepartmentCard department={department} />

            {department.children && <DepartmentsList departments={department.children} />}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default DepartmentsList
