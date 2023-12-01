import PrivateRoute from '@/components/private-route/private-route'
import LaborActivities from './labor-activities/labor-activities'
import PageLayout from '@/components/layouts/page-layout/page-layout'
import EmployeeLayout from '@/components/layouts/employee-layout/employee-layout'
import { Main } from './styled'

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
