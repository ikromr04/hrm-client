import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { Wrapper } from './styled'
import { Languages } from '@/types/languages'
import { EmployeesUpdateDTO } from '@/dto/employees-dto'
import { languageLevelOptions } from '@/const'
import { EmployeeLanguage } from '@/types/employees'
import { ID } from '@/types'
import Select from '@/components/ui/select/select'

function EmptyLanguageFields({
  languages,
  setDTO,
}: {
  languages: Languages
  setDTO: Dispatch<SetStateAction<EmployeesUpdateDTO>>
}): ReactNode {
  const [level, setLevel] = useState(languageLevelOptions[0].value)

  const handleLanguageChange = (id: ID) => {
    const newEmployeeLanguage: EmployeeLanguage = {
      id,
      name: languages.find(({ id }) => (String(id) === id))?.name || '',
      level,
    }
    setDTO((prevDTO) => {
      prevDTO.languages = [...(prevDTO.languages || []), newEmployeeLanguage]
      return { ...prevDTO }
    })
  }

  return (
    <Wrapper>
      <Select
        label="Язык"
        value=''
        placeholder='Выберите язык'
        options={[
          ...languages.map((language) => ({ value: language.id, label: language.name }))
        ]}
        onChange={handleLanguageChange}
      />
      <Select
        label="Уровень знания языка"
        value={level}
        options={languageLevelOptions}
        onChange={(level: string) => setLevel(level)}
      />
    </Wrapper>
  )
}

export default EmptyLanguageFields
