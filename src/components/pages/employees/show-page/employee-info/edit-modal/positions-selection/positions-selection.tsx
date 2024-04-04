import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import { getPositions } from '@/store/position-slice/position-selector'
import { ReactNode, memo, useEffect } from 'react'

function PositionsSelection({
  isOpen,
  onChange,
  value,
}: {
  isOpen: boolean
  onChange: (value: string[]) => void
  value: string[]
}): ReactNode {
  const positions = useAppSelector(getPositions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    isOpen && !positions && dispatch(fetchPositionsAction())
  }, [positions, dispatch, isOpen])

  if (!positions) {
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
        ...positions.map(({ id, title }) => ({ value: id, label: title }))
      ]} />
  )
}

export default memo(PositionsSelection)
