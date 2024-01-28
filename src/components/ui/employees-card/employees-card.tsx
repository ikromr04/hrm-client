import { Employee } from '@/types/employees'
import {
  Aside,
  Header,
  Avatar,
  PositionsWrapper,
  Footer,
  FooterLinks,
  FooterLink,
  EmployeeLink,
} from './styled'
import defaultAvatar from '@/assets/static/default-avatar.png'
import Title from '../title/title'
import Text from '../text/text'
import Accent from '../accent/accent'
import EnvelopeIcon from '@/components/icons/envelope-icon'
import CallIcon from '@/components/icons/call-icon'
import Info from '../info/info'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getUser } from '@/store/auth-slice/auth-selector'
import Details from './details/details'
import Languages from './languages/languages'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import { setEmployeeAction } from '@/store/employee-slice/employees-slice'

type EmployeesCardProps = {
  employee: Employee
}

function EmployeesCard({ employee }: EmployeesCardProps): JSX.Element {
  const user = useAppSelector(getUser)
  const filter = useAppSelector(getEmployeesFilter)
  const dispatch = useAppDispatch()

  return (
    <Aside currentUser={user?.id === employee.id}>
      <Header>
        <Avatar
          src={employee.avatar || defaultAvatar}
          alt={employee.name}
          width={64}
          height={64} />
        <div>
          <Title small>
            <EmployeeLink to={generatePath(AppRoute.Employees.Show, { id: employee.id })} onClick={() => dispatch(setEmployeeAction(null))}>
              {employee.surname} {employee.name}
            </EmployeeLink>
          </Title>
          <Text>{employee.jobs.map(({ title }) => title).join(', ')}</Text>
          <PositionsWrapper>
            {filter.positions.isShown && employee.positions.map(({ id, title }) => (<Accent key={id}>{title}</Accent>))}
          </PositionsWrapper>
        </div>
      </Header>
      <Languages employee={employee} />
      <Details employee={employee} />
      <Footer>
        <FooterLinks>
          <FooterLink to={`mailto:${employee.details?.email}`}>
            <EnvelopeIcon /> <Info top>Отправить почту</Info>
          </FooterLink>
          <FooterLink to={`tel:${employee.details?.tel1 || employee.details?.tel2}`}>
            <CallIcon /> <Info top>Позвонить</Info>
          </FooterLink>
        </FooterLinks>
        {filter.login.isShown ? employee.login : ''}
      </Footer>
    </Aside>
  )
}

export default EmployeesCard