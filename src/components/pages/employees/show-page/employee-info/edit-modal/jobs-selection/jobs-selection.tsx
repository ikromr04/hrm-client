import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'
import { getJobs } from '@/store/job-slice/job-selector'
import { useEffect } from 'react'

type JobsSelectionProps = {
  value: string[]
  onChange: (value: string[]) => void
}

function JobsSelection({ value, onChange }: JobsSelectionProps): JSX.Element {
  const jobs = useAppSelector(getJobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !jobs && dispatch(fetchJobsAction())
  }, [jobs, dispatch])

  if (!Array.isArray(jobs)) {
    return <></>
  }

  return (
    <MultiSelect
      label="Должность (необязательное)"
      value={value}
      onChange={onChange}
      options={[
        { value: '', label: 'Не выбрать' },
        ...jobs.map(({ id, title }) => ({ value: id, label: title }))
      ]}
    />
  )
}

export default JobsSelection