import Checkbox from '@/components/ui/checkbox/checkbox'
import { FormElement } from '../styled'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { ChangeEvent, useEffect } from 'react'
import { getDepartments } from '@/store/department-slice/department-selector'
import { EmployeesFilter } from '@/types/employees'
import { fetchDepartmentsAction } from '@/store/department-slice/department-api-actions'

function DepartmentsFilter({
  isOpen,
  filter,
  handleFilterChange,
}: {
  isOpen: boolean
  filter: EmployeesFilter
  handleFilterChange: (
    name: keyof EmployeesFilter,
    key: 'isShown' | 'query' | 'level',
    value: boolean | string | string[]
  ) => void
}): JSX.Element {
  const dispatch = useAppDispatch()
  const departments = useAppSelector(getDepartments)

  useEffect(() => {
    isOpen && !departments && dispatch(fetchDepartmentsAction())
  }, [departments, dispatch, isOpen])

  if (!departments) {
    return <></>
  }

  return (
    <FormElement>
      <Checkbox
        label="Отдел/Департамент"
        checked={filter.departments.isShown}
        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
          handleFilterChange('departments', 'isShown', evt.target.checked)} />
      <MultiSelect
        value={filter.departments.query}
        options={[
          { value: '', label: 'Все' },
          ...departments.map(({ id, title }) => ({ value: id, label: title }))
        ]}
        onChange={(value: string[]) =>
          handleFilterChange('departments', 'query', value)} />
    </FormElement>
  )
}

export default DepartmentsFilter
