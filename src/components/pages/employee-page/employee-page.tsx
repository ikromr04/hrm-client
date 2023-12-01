import PrivateRoute from '@/components/private-route/private-route'
import EmployeeEducations from './employee-educations/employee-educations'
import Employee from './employee/employee'
import PersonalData from './personal-data/personal-data'
import { Main } from './styled'
import PageLayout from '@/components/layouts/page-layout/page-layout'
import EmployeeLayout from '@/components/layouts/employee-layout/employee-layout'

function EmployeePage(): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <EmployeeLayout>
          <Main>
            <Employee />
            <PersonalData />
            <EmployeeEducations />
          </Main>
        </EmployeeLayout>
      </PageLayout>
    </PrivateRoute>
  )
}

export default EmployeePage
