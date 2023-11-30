import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { PropsWithChildren, useEffect } from 'react'
import { getEmployee } from '../../../store/employees-slice/employees-selector'
import EmployeeNavigation from './employee-navigation/employee-navigation'
import { SectionInner, Section } from './styled'
import { fetchEmployeeByIdAction } from '../../../store/employees-slice/employees-api-actions'
import EmployeeHeader from './employee-header/employee-header'
import EmployeeSidebar from '../employee-sidebar/employee-sidebar'

function EmployeeLayout({ children }: PropsWithChildren): JSX.Element {
  const employee = useAppSelector(getEmployee)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    if (params.employeeId && params.employeeId !== String(employee?.id)) {
      dispatch(fetchEmployeeByIdAction({ employeeId: params.employeeId }))
    }
  }, [params.employeeId])

  return (
    <Section>
      <EmployeeHeader />

      <EmployeeNavigation />

      <SectionInner>
        {children}
        <EmployeeSidebar />
      </SectionInner>
    </Section>
  )
}

export default EmployeeLayout
