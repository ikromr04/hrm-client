import EmployeeCards from '@/components/ui/employee-cards/employee-cards'
import EmployeesTable from '@/components/ui/employees-table/employees-table'
import Spinner from '@/components/ui/spinner/spinner'
import Text from '@/components/ui/text/text'
import { useAppSelector } from '@/hooks'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import { Employees } from '@/types/employees'
import { filterEmployees } from '@/utils/employees'
import { useLocation } from 'react-router-dom'
import { Wrapper } from './styled'
import { ReactNode } from 'react'

function EmployeesList({
  employees
}: {
  employees: Employees | null
}): ReactNode {
  const searchParams = new URLSearchParams(useLocation().search)
  const view = searchParams.get('view')
  const filter = useAppSelector(getEmployeesFilter)
  
  if (!employees) {
    return <Spinner />
  }

  const filteredEmployees = filterEmployees(filter, employees || [])

  return (
    <Wrapper>
      <Text>Отображение 1 - {filteredEmployees.length} из {employees.length}</Text>
      {(view === 'list')
        ? <EmployeesTable employees={filteredEmployees} />
        : <EmployeeCards employees={filteredEmployees} />}
    </Wrapper>
  )
}

export default EmployeesList
