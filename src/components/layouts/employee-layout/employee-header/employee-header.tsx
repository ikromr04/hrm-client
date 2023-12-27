import { 
  EmployeeJobs, 
  EmployeePositions, 
  Header, 
  HeaderInner, 
  EmployeeName, 
  Jobs,
  EmployeePosition
} from './styled'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import BriefcaseIcon from '@/components/icons/briefcase-icon'
import Button from '@/components/ui/button/button'
import ChevronLeftIcon from '@/components/icons/chevron-left-icon'
import ChevronRightIcon from '@/components/icons/chevron-right-icon'
import Actions from '@/components/ui/actions/actions'
import EmployeeAvatar from './employee-avatar/employee-avatar'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'

function EmployeeHeader(): JSX.Element {
  const employee = useAppSelector(getEmployee)
  
  if (!employee) {
    return <></>
  }

  return (
    <Header>
      <EmployeeAvatar />

      <HeaderInner>
        <div>
          <EmployeeName>
            {`${employee.surname} ${employee.name} ${employee.patronymic || ''}`}
          </EmployeeName>
          <EmployeeJobs>
            {employee.jobs.length ? <BriefcaseIcon width={16} height={16} /> : ''}
            <Jobs>
              {employee.jobs?.map(({ title }) => title).join(', ')}
            </Jobs>
          </EmployeeJobs>
          <EmployeePositions>
            {employee.positions?.map(({ title }) => (
              <EmployeePosition key={title}>{title}</EmployeePosition>
            ))}
          </EmployeePositions>
        </div>

        <Actions>
          <Button href={generatePath(AppRoute.Employees.Show, { id: employee.previous })}>
            <ChevronLeftIcon /> Предыдущий
          </Button>
          <Button href={generatePath(AppRoute.Employees.Show, { id: employee.next })}>
            Следующий <ChevronRightIcon width={16} height={16} />
          </Button>
        </Actions>
      </HeaderInner>
    </Header>
  )
}

export default EmployeeHeader
