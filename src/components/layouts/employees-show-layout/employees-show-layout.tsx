import { useParams } from 'react-router-dom'
import { PropsWithChildren, useEffect } from 'react'
import { Main, Content } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { fetchEmployeeByIdAction } from '@/store/employee-slice/employees-api-actions'
import PageLayout from '../page-layout/page-layout'
import Header from './header/header'
import Navigation from './navigation/navigation'
import Sidebar from './sidebar/sidebar'

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
      <Main>
        <Header />

        <Navigation />
        
        <Content>
          {children}
          <Sidebar />
        </Content>
      </Main>
    </PageLayout>
  )
}

export default EmployeesShowLayout
