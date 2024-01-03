import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import { getPositions } from '@/store/position-slice/position-selector'
import { useEffect } from 'react'

type PositionsSelectionProps = {
  value: string[]
  onChange: (value: string[]) => void
}

function PositionsSelection({ value, onChange }: PositionsSelectionProps): JSX.Element {
  const positions = useAppSelector(getPositions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !positions && dispatch(fetchPositionsAction())
  }, [positions, dispatch])

  if (!Array.isArray(positions)) {
    return <></>
  }

  return (
    <MultiSelect
      label="Позиция (необязательное)"
      value={value}
      onChange={onChange}
      options={[
        { value: '', label: 'Не указано' },
        ...positions.map(({ id, title }) => ({ value: id, label: title }))
      ]}
    />
  )
}

export default PositionsSelection