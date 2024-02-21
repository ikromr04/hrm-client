import { Employee } from '@/types/employees'
import { ReactNode } from 'react'
import { Actions, Avatar, Card } from './styled'
import defaultAvatar from '@/assets/static/default-avatar.png'
import Text from '../../text/text'
import Title from '../../title/title'
import TextLink from '../../text-link/text-link'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import Button from '../../button/button'
import XIcon from '@/components/icons/x-icon'
import Info from '../../info/info'
import StarIcon from '@/components/icons/star-icon'

function EmployeesCard({
  employee,
  editable = true,
}: {
  employee: Employee & { leader: boolean }
  editable?: boolean
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
      {editable &&
        <Actions>
          <Button
            type="button"
            warning
            small
            square
          >
            <StarIcon />
            <Info top>Сделать руководителем</Info>
          </Button>
          <Button
            type="button"
            error
            small
            square
          >
            <XIcon />
            <Info top>Отделить</Info>
          </Button>
        </Actions>}
    </Card>
  )
}

export default EmployeesCard
