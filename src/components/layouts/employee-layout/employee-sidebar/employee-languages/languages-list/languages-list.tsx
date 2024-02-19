import { ReactNode } from 'react'
import DescriptionList from '@/components/ui/description-list/description-list'
import Text from '@/components/ui/text/text'
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { EmployeeLanguage } from '@/types/employees'

function LanguagesList(): ReactNode {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  const transformLanguages = (languages: EmployeeLanguage[]) =>
    languages.reduce((acc: { [key: string]: string }, language) => {
      acc[language.name] = language.level
      return acc
    }, {})

  if (!employee.languages.length) {
    return (<Text>Не заполнено</Text>)
  }

  return <DescriptionList list={transformLanguages(employee.languages)} detailedInverse />
}

export default LanguagesList
