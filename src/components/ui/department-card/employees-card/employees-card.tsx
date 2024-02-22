import { Employee } from '@/types/employees'
import { ReactNode } from 'react'
import { Avatar, Card } from './styled'
import defaultAvatar from '@/assets/static/default-avatar.png'
import Text from '../../text/text'
import Title from '../../title/title'
import TextLink from '../../text-link/text-link'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'

function EmployeesCard({
  employee,
}: {
  employee: Employee & { leader: boolean }
}): ReactNode {
  return (
    <Card>
      <Avatar
        src={employee.avatar || defaultAvatar}
        alt={employee.name}
        width={48}
        height={48} />
      <div>
        <Title tagName="h3" small>
          <TextLink href={employee.id && generatePath(AppRoute.Employees.Show, { id: employee.id })}>
            {employee.name} {employee.surname}
          </TextLink>
        </Title>
        <Text>{employee.jobs.map(({ title }) => title).join(', ')}</Text>
      </div>
    </Card>
  )
}

export default EmployeesCard
