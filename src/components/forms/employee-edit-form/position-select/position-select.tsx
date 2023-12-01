import MultiSelect from '@/components/ui/multi-select/multi-select'
import { EmployeeUpdateDTO } from '@/dto/employees'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import { getPositions } from '@/store/position-slice/position-selector'
import { PositionId } from '@/types/position'
import { Dispatch, SetStateAction, useEffect } from 'react'

type PositionSelectProps = {
  dto: EmployeeUpdateDTO
  setDTO: Dispatch<SetStateAction<EmployeeUpdateDTO>>
}

function PositionSelect({ dto, setDTO }: PositionSelectProps): JSX.Element {
  const positions = useAppSelector(getPositions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !positions && dispatch(fetchPositionsAction())
  }, [dispatch, positions])

  const handleSelectChange = (values: PositionId[]) =>
    setDTO((prevState) => {
      const newState: EmployeeUpdateDTO = JSON.parse(JSON.stringify(prevState))
      newState.positions = values
      return newState
    })

  return (
    <MultiSelect
      label="Позиция"
      options={positions?.map(({ id, title }) => ({ value: id, label: title })) || []}
      values={dto.positions}
      onChange={handleSelectChange}
    />
  )
}

export default PositionSelect
