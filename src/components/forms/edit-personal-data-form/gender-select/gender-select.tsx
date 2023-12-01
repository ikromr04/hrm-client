import { BaseSyntheticEvent, useState } from 'react'
import { useAppSelector } from '../../../../hooks'
import Select from '../../../ui/select/select'
import { getEmployeePersonalData } from '../../../../store/employee-slice/employees-selector'
import { EMPTY_OPTION_LABEL } from '../../../../const'

function GenderSelect(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)
  const [gender, setGender] = useState(personalData?.gender || '')

  return (
    <Select
      label="Пол"
      name="gender"
      value={gender}
      onChange={(evt: BaseSyntheticEvent) => setGender(evt.target.value)}
      options={[
        { value: '', label: EMPTY_OPTION_LABEL },
        { value: 'Мужчина', label: 'Мужчина' },
        { value: 'Женщина', label: 'Женщина' }
      ]}
    />
  )
}

export default GenderSelect
