import EmployeeLayout from '@/components/layouts/employee-layout/employee-layout'
import EmployeeEducations from './employee-educations/employee-educations'
import Employee from './employee/employee'
import PersonalData from './personal-data/personal-data'
import { Main } from './styled'
import EmployeeInfo from './employee-info/employee-info'

function EmployeesShowPage(): JSX.Element {
  return (
    <EmployeeLayout>
      <Main>
        <EmployeeInfo />
        {/* <PersonalData /> */}
        {/* <EmployeeEducations /> */}
      </Main>
    </EmployeeLayout>
  )
}

export default EmployeesShowPage
