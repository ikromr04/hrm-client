import FilterIcon from '@/components/icons/filter-icon'
import { ButtonWrapper, FilterButton, FilterCaret, Form, FormElement, FormTitle } from './styled'
import { ChangeEvent, ReactNode, memo, useEffect, useState } from 'react'
import Title from '@/components/ui/title/title'
import LanguagesFilter from './languages-filter/languages-filter'
import DetailsFilter from './details-filter/details-filter'
import Checkbox from '@/components/ui/checkbox/checkbox'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import { EmployeesFilter } from '@/types/employees'
import { resetEmployeesFilterAction, setEmployeesFilterAction } from '@/store/app-slice/app-slice'
import Input from '@/components/ui/input/input'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { getJobs } from '@/store/job-slice/job-selector'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'
import { getPositions } from '@/store/position-slice/position-selector'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import Select from '@/components/ui/select/select'
import Button from '@/components/ui/button/button'
import XIcon from '@/components/icons/x-icon'

function EmployeeFilter(): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const filter = useAppSelector(getEmployeesFilter)
  const dispatch = useAppDispatch()
  const jobs = useAppSelector(getJobs)
  const positions = useAppSelector(getPositions)

  useEffect(() => {
    !jobs && dispatch(fetchJobsAction())
    !positions && dispatch(fetchPositionsAction())
  }, [jobs, positions, dispatch])

  if (!jobs || !positions) {
    return <></>
  }

  const handleFilterChange = (
    name: keyof EmployeesFilter | 'order',
    key: 'isShown' | 'query' | 'by' | 'type',
    value: boolean | string | string[]
  ) => {
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
          <Title small>Сортировка</Title>
          <Select
            label="Столбец"
            options={[
              { value: 'surname', label: 'ФИО' },
              { value: 'login', label: 'Логин' },
              { value: 'startedWorkAt', label: 'Начало работы' },
              { value: 'children', label: 'Количество детей' },
            ]}
            value={filter.order.by}
            onChange={(value: string) =>
              handleFilterChange('order', 'by', value)} />
          <Select
            label="Тип"
            options={[
              { value: 'asc', label: 'По возрастанию' },
              { value: 'desc', label: 'По убиванию' },
            ]}
            value={filter.order.type}
            onChange={(value: string) =>
              handleFilterChange('order', 'type', value)} />
        </FormElement>

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

        <FormElement>
          <Checkbox label="Должность" checked disabled />
          <MultiSelect
            value={filter.jobs.query}
            options={[
              { value: '', label: 'Все' },
                ...jobs.map(({ id, title }) => ({ value: id, label: title }))
            ]}
            onChange={(value: string[]) =>
              handleFilterChange('jobs', 'query', value)} />
        </FormElement>

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

        <DetailsFilter />

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
