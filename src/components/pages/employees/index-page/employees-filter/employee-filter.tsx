import FilterIcon from '@/components/icons/filter-icon'
import { ButtonWrapper, CloseIcon, FilterButton, FilterCaret, Form, FormElement, FormTitle } from './styled'
import { ChangeEvent, ReactNode, memo, useState } from 'react'
import LanguagesFilter from './languages-filter/languages-filter'
import Checkbox from '@/components/ui/checkbox/checkbox'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import { EmployeesFilter } from '@/types/employees'
import { resetEmployeesFilterAction, setEmployeesFilterAction } from '@/store/app-slice/app-slice'
import Input from '@/components/ui/input/input'
import Button from '@/components/ui/button/button'
import DepartmentsFilter from './departments-filter/departments-filter'
import JobsFilter from './jobs-filter/jobs-filter'
import PositionsFilter from './positions-filter/positions-filter'

function EmployeeFilter(): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const filter = useAppSelector(getEmployeesFilter)
  const dispatch = useAppDispatch()

  const handleFilterChange = (
    name: keyof EmployeesFilter,
    key: 'isShown' | 'query' | 'level',
    value: boolean | string | string[]
  ): void => {
    dispatch(setEmployeesFilterAction({
      ...filter,
      [name]: {
        ...filter[name],
        [key]: value,
      }
    }))
  }

  return (
    <>
      <FilterButton type="button" onClick={() => setIsOpen(true)}>
        <FilterIcon /> Фильтр <FilterCaret />
      </FilterButton>

      <Form isOpen={isOpen}>
        <FormTitle>
          Фильтр сотрудников
          <Button
            type="button"
            error
            onClick={() => setIsOpen(!isOpen)}
          >
            <CloseIcon />
          </Button>
        </FormTitle>

        <FormElement>
          <Checkbox label="ФИО" checked disabled />
          <Input
            type="search"
            value={filter.name.query}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleFilterChange('name', 'query', evt.target.value)} />
        </FormElement>

        <FormElement>
          <Checkbox
            label="Логин"
            checked={filter.login.isShown}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleFilterChange('login', 'isShown', evt.target.checked)} />
          <Input
            type="search"
            value={filter.login.query}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleFilterChange('login', 'query', evt.target.value)} />
        </FormElement>

        <DepartmentsFilter
          isOpen={isOpen}
          filter={filter}
          handleFilterChange={handleFilterChange} />

        <JobsFilter
          isOpen={isOpen}
          filter={filter}
          handleFilterChange={handleFilterChange} />

        <PositionsFilter
          isOpen={isOpen}
          filter={filter}
          handleFilterChange={handleFilterChange} />

        <LanguagesFilter
          isOpen={isOpen}
          filter={filter} />

        <ButtonWrapper>
          <Button
            success
            type="button"
            onClick={() => dispatch(resetEmployeesFilterAction())}
          >
            Сбросить
          </Button>
        </ButtonWrapper>
      </Form>
    </>
  )
}

export default memo(EmployeeFilter)
