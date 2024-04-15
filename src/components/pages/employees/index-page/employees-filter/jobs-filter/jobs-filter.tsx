import Checkbox from '@/components/ui/checkbox/checkbox'
import { FormElement } from '../styled'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useEffect } from 'react'
import { EmployeesFilter } from '@/types/employees'
import { getJobs } from '@/store/job-slice/job-selector'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'

function JobsFilter({
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
  const jobs = useAppSelector(getJobs)

  useEffect(() => {
    isOpen && !jobs && dispatch(fetchJobsAction())
  }, [jobs, dispatch, isOpen])

  if (!jobs) {
    return <></>
  }

  return (
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
  )
}

export default JobsFilter
