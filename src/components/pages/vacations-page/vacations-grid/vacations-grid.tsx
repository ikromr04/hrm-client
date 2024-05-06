import { EmployeesVacations } from '@/types/vacations'
import { BaseSyntheticEvent, ReactNode, useState } from 'react'
import { Column, ColumnToolbar, Month, MonthRow, Row, Search, Wrapper } from './styled'
import TextLink from '@/components/ui/text-link/text-link'
import { generatePath } from 'react-router-dom'
import { AppRoute } from '@/const'
import { useAppDispatch } from '@/hooks'
import { setEmployeeAction } from '@/store/employee-slice/employees-slice'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { MONTHS } from '@/utils'
import VacationFrame from './vacation-frame/vacation-frame'

function VacationsGrid({
  employeesVacations,
  year,
}: {
  employeesVacations: EmployeesVacations
  year: number
}): ReactNode {
  const [keyword, setKeyword] = useState<string>('')
  const [filter, setFilter] = useState<number | null>(null)
  const dispatch = useAppDispatch()

  const handleFilterClick = (monthIndex: number): () => void => (): void => {
    if (filter === monthIndex) {
      setFilter(null)
      return
    }
    setFilter(monthIndex)
  }

  const filteredEmployee = employeesVacations
    .filter((employee) => `${employee.surname} ${employee.name} ${employee.patronymic}`.toLowerCase().includes(keyword))
    .filter(({ vacations }) => filter ? vacations.find((vacation) => vacation.year === year)?.month === filter : true)

  return (
    <Wrapper>
      <Column>
        <ColumnToolbar>
          <Search
            type="search"
            placeholder="Поиск"
            value={keyword}
            onChange={(evt: BaseSyntheticEvent) => setKeyword(evt.target.value)} />
        </ColumnToolbar>
        {filteredEmployee.map((employee) => (
          <Row key={employee.id}>
            <img
              src={employee.avatarThumb}
              height={144}
              width={144}
              alt={employee.name}
              loading="lazy"
              decoding="async"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = defaultAvatar
              }} />

            <TextLink
              href={generatePath(AppRoute.Employees.Show, { id: employee.id })}
              onClick={() => dispatch(setEmployeeAction(null))}
            >
              {employee.surname} {employee.name} {employee.patronymic || ''}
            </TextLink>
          </Row>
        ))}
      </Column>
      <Column>
        <ColumnToolbar>
          {MONTHS.map((month) => (
            <Month
              key={month[0]}
              type="button"
              onClick={handleFilterClick(+month[0])}
              warning={month[0] === filter}
            >
              {month[1]}
            </Month>
          ))}
        </ColumnToolbar>
        {filteredEmployee.map((employee) => (
          <MonthRow key={employee.id}>
            {MONTHS.map((month) =>
              <VacationFrame
                key={month[0]}
                employee={employee}
                year={year}
                month={month} />
            )}
          </MonthRow>
        ))}
      </Column>
    </Wrapper>
  )
}

export default VacationsGrid
