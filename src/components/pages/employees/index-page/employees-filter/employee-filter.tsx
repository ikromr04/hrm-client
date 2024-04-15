import FilterIcon from '@/components/icons/filter-icon'
import { ButtonWrapper, FilterButton, FilterCaret, Form, FormElement, FormTitle } from './styled'
import { ChangeEvent, ReactNode, memo, useEffect, useState } from 'react'
import LanguagesFilter from './languages-filter/languages-filter'
import Checkbox from '@/components/ui/checkbox/checkbox'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import { EmployeesFilter } from '@/types/employees'
import { resetEmployeesFilterAction, setEmployeesFilterAction } from '@/store/app-slice/app-slice'
import Input from '@/components/ui/input/input'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { getPositions } from '@/store/position-slice/position-selector'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import Button from '@/components/ui/button/button'
import XIcon from '@/components/icons/x-icon'
import DepartmentsFilter from './departments-filter/departments-filter'
import JobsFilter from './jobs-filter/jobs-filter'

function EmployeeFilter(): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const filter = useAppSelector(getEmployeesFilter)
  const dispatch = useAppDispatch()
  const positions = useAppSelector(getPositions)

  useEffect(() => {
    !positions && dispatch(fetchPositionsAction())
  }, [positions, dispatch])

  if (!positions) {
    return <></>
  }

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
            <XIcon />
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

        <FormElement>
          <Checkbox
            label="Позиция"
            checked={filter.positions.isShown}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleFilterChange('positions', 'isShown', evt.target.checked)} />
          <MultiSelect
            value={filter.positions.query}
            options={[
              { value: '', label: 'Все' },
              ...positions.map(({ id, title }) => ({ value: id, label: title }))
            ]}
            onChange={(value: string[]) =>
              handleFilterChange('positions', 'query', value)} />
        </FormElement>

        <LanguagesFilter />

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
