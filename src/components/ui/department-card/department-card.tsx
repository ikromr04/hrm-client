import { Department } from '@/types/departments'
import { ReactNode } from 'react'
import BoxToolbar from '../box-toolbar/box-toolbar'
import Title from '../title/title'
import { Card, SectionTitle } from './styled'
import EmployeesCard from './employees-card/employees-card'
import { Employee } from '@/types/employees'
import { DepartmentActions } from './styled'
import Button from '../button/button'
import DeleteIcon from '@/components/icons/delete-icon'
import Info from '../info/info'
import EditIcon from '@/components/icons/edit-icon'

function DepartmentCard({
  department,
  editable = true,
}: {
  department: Department
  editable?: boolean
}): ReactNode {
  const leaders: (Employee & { leader: boolean })[] | undefined = department.employees?.filter(({ leader }) => leader)
  const employees: (Employee & { leader: boolean })[] | undefined = department.employees?.filter(({ leader }) => !leader)

  return (
    <Card tagName="section">
      <BoxToolbar>
        <Title small>{department.title}</Title>
      </BoxToolbar>
      <section>
        {leaders?.map((leader) => (
          <EmployeesCard
            key={leader.id}
            editable={editable}
            employee={leader} />
        ))}

        {employees?.length ? <>
          <SectionTitle tagName="h3" small warn>Сотрудники</SectionTitle>
          {employees.map((employee) => (
            <EmployeesCard
              key={employee.id}
              editable={editable}
              employee={employee} />
          ))}
        </> : ''}
      </section>
      {editable && 
        <DepartmentActions>
          <Button
            type="button"
            error
            square
          >
            <DeleteIcon />
            <Info left>Удалить {department.title}</Info>
          </Button>
          <Button
            type="button"
            warning
            square
          >
            <EditIcon />
            <Info left>Редактировать {department.title}</Info>
          </Button>
        </DepartmentActions>}
    </Card>
  )
}

export default DepartmentCard
