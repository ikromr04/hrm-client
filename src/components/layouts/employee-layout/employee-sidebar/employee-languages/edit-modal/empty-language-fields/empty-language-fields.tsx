import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from 'react'
import { Wrapper } from './styled'
import { Languages } from '@/types/languages'
import { EmployeeLanguage, EmployeeLanguages } from '@/types/employees'
import { EMPTY_OPTION_LABEL, languageLevelOptions } from '@/const'
import Select from '@/components/ui/select/select'

type EmptyLanguageFieldsProps = {
  languages: Languages
  setEmployeeLanguages: Dispatch<SetStateAction<EmployeeLanguages>>
}

function EmptyLanguageFields({
  languages,
  setEmployeeLanguages,
}: EmptyLanguageFieldsProps): JSX.Element {
  const [level, setLevel] = useState(languageLevelOptions[0].value)

  const handleLanguageChange = (evt: BaseSyntheticEvent) => {
    const newEmployeeLanguage: EmployeeLanguage = {
      id: evt.target.value,
      name: languages.find(({ id }) => (String(id) === evt.target.value))?.name || '',
      level,
    }
    setEmployeeLanguages((prevLanguages) => {
      return [
        ...prevLanguages,
        newEmployeeLanguage
      ]
    })
    evt.target.value = ''
  }

  return (
    <Wrapper>
      <Select
        label="Язык"
        options={[
          { value: '', label: EMPTY_OPTION_LABEL },
          ...languages.map((language) => ({ value: language.id, label: language.name }))
        ]}
        onChange={handleLanguageChange}
      />
      <Select
        label="Уровень знания языка"
        value={level}
        options={languageLevelOptions}
        onChange={(evt: BaseSyntheticEvent) => setLevel(evt.target.value)}
      />
    </Wrapper>
  )
}

export default EmptyLanguageFields
