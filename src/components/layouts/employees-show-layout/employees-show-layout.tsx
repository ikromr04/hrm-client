import { useParams } from 'react-router-dom'
import { PropsWithChildren, useEffect } from 'react'
import EmployeeNavigation from './employee-navigation/employee-navigation'
import { SectionInner, Section } from './styled'
import EmployeeHeader from './employee-header/employee-header'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { fetchEmployeeByIdAction } from '@/store/employee-slice/employees-api-actions'
import EmployeeSidebar from '../employee-sidebar/employee-sidebar'
import PageLayout from '../page-layout/page-layout'

function EmployeesShowLayout({ children }: PropsWithChildren): JSX.Element {
  const employee = useAppSelector(getEmployee)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    if (params.employeeId && params.employeeId !== String(employee?.id)) {
      dispatch(fetchEmployeeByIdAction({ employeeId: params.employeeId }))
    }
  }, [dispatch, employee?.id, params.employeeId])

  return (
    <PageLayout>
      <Section>
        <EmployeeHeader />

        <EmployeeNavigation />

        <SectionInner>
          {children}
          <EmployeeSidebar />
        </SectionInner>
      </Section>
    </PageLayout>
  )
}

export default EmployeesShowLayout
