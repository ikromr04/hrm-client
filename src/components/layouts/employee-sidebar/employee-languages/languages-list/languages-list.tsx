import { useAppSelector } from '../../../../../hooks'
import { getEmployee } from '../../../../../store/employee-slice/employees-selector'
import { EmployeeLanguages } from '../../../../../types/employee'
import DescriptionList from '../../../../ui/description-list/description-list'
import Text from '../../../../ui/text/text'

function LanguagesList(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  const transformLanguages = (languages: EmployeeLanguages) =>
    languages.reduce((acc: { [key: string]: string }, language) => {
      acc[language.name] = language.level
      return acc
    }, {})

  if (!employee.languages || !employee.languages.length) {
    return (<Text>Не заполнено</Text>)
  }

  return (<DescriptionList list={transformLanguages(employee.languages)} detailedInverse />)
}

export default LanguagesList
