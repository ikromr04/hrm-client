import EmployeesLayout from '@/components/layouts/employees-layout/employees-layout'
import Processes from './processes/processes'
import { Main, Toolbar } from './styled'
import SearchField from '@/components/ui/search-field/search-field'

function EmployeesPage(): JSX.Element {
  return (
    <EmployeesLayout>
      <Main>
        <h2 className="visually-hidden">Список сотрудников</h2>

        <Processes />

        <Toolbar>
          <SearchField
            placeholder="Поиск по имени, электронной почте или номеру телефона"
          />
          
        </Toolbar>
      </Main>
    </EmployeesLayout>
  )
}

export default EmployeesPage
