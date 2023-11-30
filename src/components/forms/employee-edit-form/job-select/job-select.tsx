import { Dispatch, SetStateAction, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getJobs } from '../../../../store/job-slice/job-selector'
import { fetchJobsAction } from '../../../../store/job-slice/job-api-actions'
import MultiSelect from '../../../ui/multi-select/multi-select'
import { EmployeeUpdateDTO } from '../../../../dto/employees'
import { JobId } from '../../../../types/job'

type JobSelectProps = {
  dto: EmployeeUpdateDTO
  setDTO: Dispatch<SetStateAction<EmployeeUpdateDTO>>
}

function JobSelect({ dto, setDTO }: JobSelectProps): JSX.Element {
  const jobs = useAppSelector(getJobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !jobs && dispatch(fetchJobsAction())
  }, [])

  const handleSelectChange = (values: JobId[]) =>
    setDTO((prevState) => {
      const newState: EmployeeUpdateDTO = JSON.parse(JSON.stringify(prevState))
      newState.jobs = values
      return newState
    })

  return (
    <MultiSelect
      label="Должность"
      options={jobs?.map(({ id, title }) => ({ value: id, label: title })) || []}
      values={dto.jobs}
      onChange={handleSelectChange}
    />
  )
}

export default JobSelect
