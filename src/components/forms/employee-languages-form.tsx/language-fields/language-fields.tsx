import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { languageLevelOptions } from '../../../../const'
import { EmployeeLanguage, EmployeeLanguages } from '../../../../types/employee'
import { Languages } from '../../../../types/language'
import Select from '../../../ui/select/select'
import { Wrapper } from './styled'
import Button from '../../../ui/button/button'
import XIcon from '../../../icons/x-icon'
import Info from '../../../ui/info/info'

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
