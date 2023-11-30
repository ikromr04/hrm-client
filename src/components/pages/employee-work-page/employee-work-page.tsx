import EmployeeLayout from '../../layouts/employee-layout/employee-layout'
import PageLayout from '../../layouts/page-layout/page-layout'
import PrivateRoute from '../../private-route/private-route'
import { Main } from '../main-page/styled'
import LaborActivities from './labor-activities/labor-activities'

function EmployeeWorkPage(): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <EmployeeLayout>
          <Main>
            <LaborActivities />
          </Main>
        </EmployeeLayout>
      </PageLayout>
    </PrivateRoute>
  )
}

export default EmployeeWorkPage
