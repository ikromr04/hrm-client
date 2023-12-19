import { 
  EmployeeJobs, 
  EmployeePositions, 
  Header, 
  HeaderInner, 
  EmployeeName 
} from './styled'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import BriefcaseIcon from '@/components/icons/briefcase-icon'
import Button from '@/components/ui/button/button'
import ChevronLeftIcon from '@/components/icons/chevron-left-icon'
import ChevronRightIcon from '@/components/icons/chevron-right-icon'
import Actions from '@/components/ui/actions/actions'
import EmployeeAvatar from './employee-avatar/employee-avatar'

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
          {employee.jobs.length &&
            <EmployeeJobs>
              <BriefcaseIcon width={16} height={16} /> 
              {employee.jobs.map(({ title }) => title).join(', ')}
            </EmployeeJobs>}
          <EmployeePositions>
            {employee.positions?.map(({ title }) => title).join(', ')}
          </EmployeePositions>
        </div>

        <Actions>
          <Button>
            <ChevronLeftIcon width={16} height={16} /> Предыдущий
          </Button>
          <Button>
            Следующий <ChevronRightIcon width={16} height={16} />
          </Button>
        </Actions>
      </HeaderInner>
    </Header>
  )
}

export default EmployeeHeader
