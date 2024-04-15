import Checkbox from '@/components/ui/checkbox/checkbox'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import Select from '@/components/ui/select/select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getLanguages } from '@/store/language-slice/language-selector'
import { ChangeEvent, ReactNode, useEffect } from 'react'
import { fetchLanguagesAction } from '@/store/language-slice/language-api-actions'
import { setEmployeesFilterAction } from '@/store/app-slice/app-slice'
import { languageLevelOptions } from '@/const'
import { FormElement } from '../styled'
import { EmployeesFilter } from '@/types/employees'

function LanguagesFilter({
  isOpen,
  filter,
}: {
  isOpen: boolean
  filter: EmployeesFilter
}): ReactNode {
  const languages = useAppSelector(getLanguages)
  const dispatch = useAppDispatch()

  useEffect(() => {
    isOpen && !languages && dispatch(fetchLanguagesAction())
  }, [isOpen, languages, dispatch])

  if (!languages) {
    return <></>
  }

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmployeesFilterAction({
      ...filter,
      languages: {
        ...filter.languages,
        isShown: evt.target.checked
      }
    }))
  }

  const handleSelectsChange = (key: 'query' | 'level') => (value: string[] | string) => {
    dispatch(setEmployeesFilterAction({
      ...filter,
      languages: {
        ...filter.languages,
        [key]: value,
      }
    }))
  }

  return (
    <FormElement>
      <Checkbox
        bold
        large
        label="Знание языков"
        checked={filter.languages.isShown}
        onChange={handleCheckboxChange} />
      <MultiSelect
        value={filter.languages.query}
        onChange={handleSelectsChange('query')}
        label="Поиск по знанию языков"
        options={[
          { value: '', label: 'Все языки' },
          ...languages.map(({ id, name }) => ({ value: id, label: name }))
        ]} />
      <Select
        value={filter.languages.level}
        onChange={handleSelectsChange('level')}
        label="Поиск по уровню знания языка"
        options={[
          { value: '', label: 'Все уровни' },
          ...languageLevelOptions
        ]} />
    </FormElement>
  )
}

export default LanguagesFilter
