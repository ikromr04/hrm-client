import { useParams } from 'react-router-dom'
import { PropsWithChildren, useEffect } from 'react'
import { Layout, LayoutContainer } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { fetchEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import PageLayout from '../page-layout/page-layout'
import EmployeeHeader from './employee-header/employee-header'
import EmployeeNavigation from './employee-navigation/employee-navigation'
import EmployeeSidebar from './employee-sidebar/employee-sidebar'

function EmployeeLayout({ children }: PropsWithChildren): JSX.Element {
  const employee = useAppSelector(getEmployee)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    if (params.id && params.id !== String(employee?.id)) {
      dispatch(fetchEmployeeAction({ id: params.id }))
    }
  }, [dispatch, employee?.id, params.id])

  return (
    <PageLayout>
      <Layout>
        <EmployeeHeader />

        <EmployeeNavigation />
        
        <LayoutContainer>
          {children}
          <EmployeeSidebar />
        </LayoutContainer>
      </Layout>
    </PageLayout>
  )
}

export default EmployeeLayout
