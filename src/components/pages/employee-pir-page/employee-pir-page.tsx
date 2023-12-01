import PrivateRoute from '@/components/private-route/private-route'
import PageLayout from '@/components/layouts/page-layout/page-layout'
import EmployeeLayout from '@/components/layouts/employee-layout/employee-layout'
import { Main } from './styled'

function EmployeePIRPage(): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <EmployeeLayout>
          <Main>
            {/*  */}
          </Main>
        </EmployeeLayout>
      </PageLayout>
    </PrivateRoute>
  )
}

export default EmployeePIRPage
