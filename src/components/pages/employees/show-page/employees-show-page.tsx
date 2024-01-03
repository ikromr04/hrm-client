import EmployeeLayout from '@/components/layouts/employee-layout/employee-layout'
import { Main } from './styled'
import EmployeeInfo from './employee-info/employee-info'
import EmployeeDetails from './employee-details/employee-details'

function EmployeesShowPage(): JSX.Element {
  return (
    <EmployeeLayout>
      <Main>
        <EmployeeInfo />
        <EmployeeDetails />
      </Main>
    </EmployeeLayout>
  )
}

export default EmployeesShowPage
