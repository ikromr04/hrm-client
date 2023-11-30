import EmployeeLayout from '../../layouts/employee-layout/employee-layout'
import PageLayout from '../../layouts/page-layout/page-layout'
import PrivateRoute from '../../private-route/private-route'
import EmployeeEducations from './employee-educations/employee-educations'
import Employee from './employee/employee'
import PersonalData from './personal-data/personal-data'
import { Main } from './styled'

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
