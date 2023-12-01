import { HeaderInner, Jobs, Name, Positions, StyledHeader } from './styled'
import EmployeeAvatar from './employee-avatar/employee-avatar'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import BriefcaseIcon from '@/components/icons/briefcase-icon'
import Buttons from '@/components/ui/buttons/buttons'
import Button from '@/components/ui/button/button'
import ChevronLeftIcon from '@/components/icons/chevron-left-icon'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import ChevronRightIcon from '@/components/icons/chevron-right-icon'

function EmployeeHeader(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  const prevLink = generatePath(AppRoute.Employees.Show, { 
    employeeId: employee.previousEmployeeId 
  })
  const nextLink = generatePath(AppRoute.Employees.Show, { 
    employeeId: employee.nextEmployeeId 
  })

  return (
    <StyledHeader>
      <EmployeeAvatar />

      <HeaderInner>
        <div>
          <Name>{`${employee.surname} ${employee.name} ${employee.patronymic || ''}`}</Name>
          {employee.jobs &&
            <Jobs>
              <BriefcaseIcon width={16} height={16} /> 
              {employee.jobs.map(({ title }) => title).join(', ')}
            </Jobs>}
          <Positions>{employee.positions?.map(({ title }) => title).join(', ')}</Positions>
        </div>

        <Buttons>
          <Button href={prevLink}>
            <ChevronLeftIcon width={16} height={16} /> Предыдущий
          </Button>
          <Button href={nextLink}>
            Следующий <ChevronRightIcon width={16} height={16} />
          </Button>
        </Buttons>
      </HeaderInner>
    </StyledHeader>
  )
}

export default EmployeeHeader
