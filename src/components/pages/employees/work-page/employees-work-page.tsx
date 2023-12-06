import LaborActivities from './labor-activities/labor-activities'
import { Main } from './styled'
import EmployeesShowLayout 
  from '@/components/layouts/employees-show-layout/employees-show-layout'

function EmployeesWorkPage(): JSX.Element {
  return (
    <EmployeesShowLayout>
      <Main>
        <LaborActivities />
      </Main>
    </EmployeesShowLayout>
  )
}

export default EmployeesWorkPage
