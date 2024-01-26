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

type EmployeesListProps = {
  employees: Employees | null
}

function EmployeesList({ employees }: EmployeesListProps) {
  const searchParams = new URLSearchParams(useLocation().search)
  const view = searchParams.get('view')
  const filter = useAppSelector(getEmployeesFilter)
  
  if (!employees) {
    return <Spinner />
  }

  const filteredEmployees = filterEmployees(filter, employees || []).sort((current, next) => {
    if (filter.order.by === 'children') {
      const a = !current.details?.children ? 0 : current.details.children.length
      const b = !next.details?.children ? 0 : next.details.children.length
      if (a > b) {
        return (filter.order.type === 'asc') ? 1 : -1
      }
      if (a < b) {
        return (filter.order.type === 'asc') ? -1 : 1
      }
      return 0;
    }
    if (
      (filter.order.by === 'surname')
      || (filter.order.by === 'login')
      || (filter.order.by === 'startedWorkAt')
      && (current[filter.order.by] > next[filter.order.by])
    ) {
      return (filter.order.type === 'asc') ? 1 : -1
    }
    if (
      (filter.order.by === 'surname')
      || (filter.order.by === 'login')
      || (filter.order.by === 'startedWorkAt')
      && (current[filter.order.by] < next[filter.order.by])
    ) {
      return (filter.order.type === 'asc') ? -1 : 1
    }
    return 0;
  });

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