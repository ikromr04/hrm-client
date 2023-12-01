import Select from '@/components/ui/select/select'
import { EMPTY_OPTION_LABEL } from '@/const'
import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'
import { BaseSyntheticEvent, useState } from 'react'

function FamilyStatusSelect(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)
  const [familyStatus, setFamilyStatus] = useState(personalData?.familyStatus || '')

  return (
    <Select
      label="Семейное положение"
      name="family_status"
      value={familyStatus}
      onChange={(evt: BaseSyntheticEvent) => setFamilyStatus(evt.target.value)}
      options={[
        { value: '', label: EMPTY_OPTION_LABEL },
        { value: 'Не женат', label: 'Не женат' },
        { value: 'Не замужем', label: 'Не замужем' },
        { value: 'Женат', label: 'Женат' },
        { value: 'Замужем', label: 'Замужем' },
      ]}
    />
  )
}

export default FamilyStatusSelect
