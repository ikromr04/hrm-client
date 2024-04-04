import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchDepartmentsAction } from '@/store/department-slice/department-api-actions'
import { getDepartments } from '@/store/department-slice/department-selector'
import { ReactNode, memo, useEffect } from 'react'

function DepartmentsSelection({
  isOpen,
  onChange,
  value,
}: {
  isOpen: boolean
  onChange: (value: string[]) => void
  value: string[]
}): ReactNode {
  const departments = useAppSelector(getDepartments)
  const dispatch = useAppDispatch()

  useEffect(() => {
    isOpen && !departments && dispatch(fetchDepartmentsAction())
  }, [departments, dispatch, isOpen])

  if (!departments) {
    return <></>
  }
  return (
    <MultiSelect
      key={(+isOpen).toString().padStart(2)}
      label="Отдел (необязательное)"
      value={value}
      onChange={onChange}
      options={[
        { value: '', label: 'Не указать' },
        ...departments.map(({ id, title }) => ({ value: id, label: title }))
      ]} />
  )
}

export default memo(DepartmentsSelection)
