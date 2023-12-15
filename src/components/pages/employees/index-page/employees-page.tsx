import EmployeesLayout from '@/components/layouts/employees-layout/employees-layout'
import Processes from './processes/processes'
import { 
  ActionsButton, 
  ActionsItem, 
  ActionsList, 
  FilterCaret, 
  Main, 
  Toolbar 
} from './styled'
import SearchField from '@/components/ui/search-field/search-field'
import FilterIcon from '@/components/icons/filter-icon'
import { Link } from 'react-router-dom'
import Info from '@/components/ui/info/info'
import GridIcon from '@/components/icons/grid-icon'
import ListIcon from '@/components/icons/list-icon'

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
          <ActionsList>
            <ActionsItem>
              <ActionsButton type="button">
                <FilterIcon /> Фильтр <FilterCaret />
              </ActionsButton>
            </ActionsItem>
            <ActionsItem>
              <ActionsButton as={Link} to="">
                <Info top>Таблица</Info> <GridIcon />
              </ActionsButton>
            </ActionsItem>
            <ActionsItem>
              <ActionsButton as={Link} to="?view=list">
                <Info top>Список</Info> <ListIcon />
              </ActionsButton>
            </ActionsItem>
          </ActionsList>
        </Toolbar>
      </Main>
    </EmployeesLayout>
  )
}

export default EmployeesPage
