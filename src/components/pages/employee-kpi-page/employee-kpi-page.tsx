import EmployeeLayout from '../../layouts/employee-layout/employee-layout'
import PageLayout from '../../layouts/page-layout/page-layout'
import PrivateRoute from '../../private-route/private-route'
import { Main } from '../main-page/styled'

function EmployeeKPIPage(): JSX.Element {
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

export default EmployeeKPIPage
