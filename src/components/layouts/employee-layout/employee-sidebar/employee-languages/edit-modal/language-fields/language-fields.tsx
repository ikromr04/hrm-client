import { EmployeeLanguage, EmployeeLanguages } from '@/types/employees'
import { Languages } from '@/types/languages'
import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { Wrapper } from './styled'
import Select from '@/components/ui/select/select'
import Button from '@/components/ui/button/button'
import XIcon from '@/components/icons/x-icon'
import Info from '@/components/ui/info/info'
import { languageLevelOptions } from '@/const'

type LanguageFieldsProps = {
  currentLanguage: EmployeeLanguage
  languages: Languages
  setEmployeeLanguages: Dispatch<SetStateAction<EmployeeLanguages>>
}

function LanguageFields({
  currentLanguage,
  languages,
  setEmployeeLanguages,
}: LanguageFieldsProps): JSX.Element {
  const handleLanguageChange = (evt: BaseSyntheticEvent) =>
    setEmployeeLanguages((prevLanguages) => prevLanguages.map((prevLanguage) => {
      if (prevLanguage.id === currentLanguage.id) {
        return {
          ...prevLanguage,
          id: evt.target.value,
          name: languages.find(({ id }) => (String(id) === evt.target.value))?.name || '',
        }
      }
      return prevLanguage
    }))

  const handleLevelChange = (evt: BaseSyntheticEvent) =>
    setEmployeeLanguages((prevLanguages) => prevLanguages.map((prevLanguage) => {
      if (prevLanguage.id === currentLanguage.id) {
        return {
          ...prevLanguage,
          level: evt.target.value,
        }
      }
      return prevLanguage
    }))

  const handleDeleteButtonClick = () =>
    setEmployeeLanguages((prevLanguages) => prevLanguages.filter((prevLanguage) => (
      prevLanguage.id !== currentLanguage.id
    )))

  return (
    <Wrapper>
      <Select
        label="Язык"
        options={[
          ...languages.map((language) => ({ value: language.id, label: language.name }))
        ]}
        value={currentLanguage.id}
        onChange={handleLanguageChange}
      />
      <Select
        label="Уровень знания языка"
        value={currentLanguage.level}
        options={languageLevelOptions}
        onChange={handleLevelChange}
      />
      <Button
        type="button"
        warning
        onClick={handleDeleteButtonClick}
      >
        <XIcon width={16} height={16} />
        <Info right>Удалить язык</Info>
      </Button>
    </Wrapper>
  )
}

export default LanguageFields
