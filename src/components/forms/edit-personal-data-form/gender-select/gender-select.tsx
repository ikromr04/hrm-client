import Select from '@/components/ui/select/select'
import { EMPTY_OPTION_LABEL } from '@/const'
import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'
import { BaseSyntheticEvent, useState } from 'react'

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
