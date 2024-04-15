import Checkbox from '@/components/ui/checkbox/checkbox'
import { FormElement } from '../styled'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { ChangeEvent, useEffect } from 'react'
import { EmployeesFilter } from '@/types/employees'
import { getPositions } from '@/store/position-slice/position-selector'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'

function PositionsFilter({
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
  const positions = useAppSelector(getPositions)

  useEffect(() => {
    isOpen && !positions && dispatch(fetchPositionsAction())
  }, [positions, dispatch, isOpen])

  if (!positions) {
    return <></>
  }

  return (
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
  )
}

export default PositionsFilter
