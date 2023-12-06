import EmployeeEducations from './employee-educations/employee-educations'
import Employee from './employee/employee'
import PersonalData from './personal-data/personal-data'
import { Main } from './styled'
import EmployeesShowLayout 
  from '@/components/layouts/employees-show-layout/employees-show-layout'

function EmployeesShowPage(): JSX.Element {
  return (
    <EmployeesShowLayout>
      <Main>
        <Employee />
        <PersonalData />
        <EmployeeEducations />
      </Main>
    </EmployeesShowLayout>
  )
}

export default EmployeesShowPage
