import { EmployeeLanguage } from '@/types/employees'
import { Languages } from '@/types/languages'
import { Dispatch, SetStateAction } from 'react'
import { Wrapper } from './styled'
import Select from '@/components/ui/select/select'
import Button from '@/components/ui/button/button'
import Info from '@/components/ui/info/info'
import { languageLevelOptions } from '@/const'
import { ID } from '@/types'
import { EmployeesUpdateDTO } from '@/dto/employees-dto'
import DeleteIcon from '@/components/icons/delete-icon'

type LanguageFieldsProps = {
  currentLanguage: EmployeeLanguage
  languages: Languages
  setDTO: Dispatch<SetStateAction<EmployeesUpdateDTO>>
}

function LanguageFields({
  currentLanguage,
  languages,
  setDTO,
}: LanguageFieldsProps): JSX.Element {
  const handleLanguageChange = (id: ID) =>
    setDTO((prevDTO) => {
      prevDTO.languages = prevDTO.languages?.map((prevLanguage) => {
        if (prevLanguage.id === currentLanguage.id) {
          return {
            id,
            name: languages.find((lang) => (lang.id === id))?.name || '',
            level: prevLanguage.level,
          }
        }
        return prevLanguage
      })
      return {...prevDTO}
    })

  const handleLevelChange = (level: string) =>
    setDTO((prevDTO) => {
      prevDTO.languages = prevDTO.languages?.map((prevLanguage) => {
        if (prevLanguage.id === currentLanguage.id) {
          return {
            ...prevLanguage,
            level,
          }
        }
        return prevLanguage
      })
      return {...prevDTO}
    })

  const handleDeleteButtonClick = () =>
    setDTO((prevDTO) => {
      prevDTO.languages = prevDTO.languages?.filter((prevLanguage) => (
        prevLanguage.id !== currentLanguage.id
      ))
      return {...prevDTO}
    })

  return (
    <Wrapper>
      <Select
        key={currentLanguage.id}
        label="Язык"
        value={currentLanguage.id}
        options={[
          ...languages.map((language) => ({ value: language.id, label: language.name }))
        ]}
        onChange={handleLanguageChange}
      />
      <Select
        label="Уровень знания языка"
        value={currentLanguage.level}
        options={languageLevelOptions}
        onChange={handleLevelChange}
      />
      <Button type="button" warning onClick={handleDeleteButtonClick}>
        <DeleteIcon /> <Info right>Удалить язык</Info>
      </Button>
    </Wrapper>
  )
}

export default LanguageFields
