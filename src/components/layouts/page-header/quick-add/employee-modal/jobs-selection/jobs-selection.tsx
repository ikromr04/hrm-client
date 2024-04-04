import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'
import { getJobs } from '@/store/job-slice/job-selector'
import { ReactNode, memo, useEffect } from 'react'

function JobsSelection({
  isOpen,
  onChange,
}: {
  isOpen: boolean
  onChange: (value: string[]) => void
}): ReactNode {
  const jobs = useAppSelector(getJobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    isOpen && !jobs && dispatch(fetchJobsAction())
  }, [jobs, dispatch, isOpen])

  if (!jobs) {
    return <></>
  }
  return (
    <MultiSelect
      key={(+isOpen).toString().padStart(2)}
      label="Отдел (необязательное)"
      value={[]}
      onChange={onChange}
      options={[
        { value: '', label: 'Не указать' },
        ...jobs.map(({ id, title }) => ({ value: id, label: title }))
      ]} />
  )
}

export default memo(JobsSelection)
