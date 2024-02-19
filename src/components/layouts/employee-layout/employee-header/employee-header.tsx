import { ReactNode } from 'react'
import { EmployeeDetail, EmployeePositions, Header, HeaderInner, EmployeeName } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import BriefcaseIcon from '@/components/icons/briefcase-icon'
import Button from '@/components/ui/button/button'
import ChevronLeftIcon from '@/components/icons/chevron-left-icon'
import ChevronRightIcon from '@/components/icons/chevron-right-icon'
import Actions from '@/components/ui/actions/actions'
import EmployeeAvatar from './employee-avatar/employee-avatar'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import { setEmployeeAction } from '@/store/employee-slice/employees-slice'
import Accent from '@/components/ui/accent/accent'
import MapPin from '@/components/icons/map-pin-icon'

function EmployeeHeader(): ReactNode {
  const employee = useAppSelector(getEmployee)
  const dispatch = useAppDispatch()
  
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
          <EmployeeDetail>
            {employee.details?.address && <>
              <MapPin /> <div>{employee.details.address}</div>
            </>}
          </EmployeeDetail>
          <EmployeeDetail>
            {employee.jobs.length > 0 && <>
              <BriefcaseIcon /> <div>{employee.jobs?.map(({ title }) => title).join(', ')}</div>
            </>}
          </EmployeeDetail>
          <EmployeePositions>
            {employee.positions?.map(({ title }) => (
              <Accent tagName="li" key={title}>{title}</Accent>
            ))}
          </EmployeePositions>
        </div>

        <Actions>
          <Button
            href={generatePath(AppRoute.Employees.Show, { id: employee.previous })}
            onClick={() => dispatch(setEmployeeAction(null))}
          >
            <ChevronLeftIcon /> Предыдущий
          </Button>
          <Button
            href={generatePath(AppRoute.Employees.Show, { id: employee.next })}
            onClick={() => dispatch(setEmployeeAction(null))}
          >
            Следующий <ChevronRightIcon width={16} height={16} />
          </Button>
        </Actions>
      </HeaderInner>
    </Header>
  )
}

export default EmployeeHeader
