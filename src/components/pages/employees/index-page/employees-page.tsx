import EmployeesLayout from '@/components/layouts/employees-layout/employees-layout'
import Processes from './processes/processes'
import { ActionsButton, ActionsItem, ActionsList, Main, Toolbar } from './styled'
import SearchField from '@/components/ui/search-field/search-field'
import Info from '@/components/ui/info/info'
import GridIcon from '@/components/icons/grid-icon'
import ListIcon from '@/components/icons/list-icon'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployees } from '@/store/employee-slice/employees-selector'
import { fetchEmployeesAction } from '@/store/employee-slice/employees-api-actions'
import { Link } from 'react-router-dom'
import EmployeesList from './employees-list/employees-list'
import EmployeesFilter from './employees-filter/employee-filter'

function EmployeesPage(): JSX.Element {
  const employees = useAppSelector(getEmployees)
  const dispatch = useAppDispatch()
  const [keyword, setKeyword] = useState('')

const filteredEmployees = employees ? employees.filter((employee) => 
  (`${employee.surname} ${employee.name} ${employee.patronymic}`).toLowerCase().includes(keyword.toLowerCase())
  || employee.login.toLowerCase().includes(keyword.toLowerCase())
  || (keyword ? (employee.details?.tel1?.toLowerCase().includes(keyword.toLowerCase()) || employee.details?.tel2?.toLowerCase().includes(keyword.toLowerCase())) : true)
  || (keyword ? employee.details?.email?.toLowerCase().includes(keyword.toLowerCase()) : true)
) : null

  useEffect(() => {
    !employees && dispatch(fetchEmployeesAction())
  }, [employees, dispatch])

  return (
    <EmployeesLayout>
      <Main>
        <h2 className="visually-hidden">Список сотрудников</h2>

        <Processes />

        <Toolbar>
          <SearchField
            type="search"
            value={keyword}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setKeyword(evt.target.value)}
            placeholder="Поиск по имени, логину, электронной почте или номеру телефона" />
          <ActionsList>
            <ActionsItem>
              <EmployeesFilter />
            </ActionsItem>
            <ActionsItem>
              <ActionsButton as={Link} to="?view=table">
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

      <EmployeesList employees={filteredEmployees} />
    </EmployeesLayout>
  )
}

export default EmployeesPage
