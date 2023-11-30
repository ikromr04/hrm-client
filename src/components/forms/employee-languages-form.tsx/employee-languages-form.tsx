import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getEmployee } from '../../../store/employees-slice/employees-selector'
import { Form } from './styled'
import { EmployeeLanguage, EmployeeLanguages } from '../../../types/employee'
import { getLanguages } from '../../../store/language-slice/language-selector'
import { fetchLanguagesAction } from '../../../store/language-slice/language-api-actions'
import EmptyLanguageFields from './empty-language-fields/empty-language-fields'
import { Languages } from '../../../types/language'
import LanguageFields from './language-fields/language-fields'
import Buttons from '../../ui/buttons/buttons'
import Button from '../../ui/button/button'
import { toast } from 'react-toastify'
import { crudEmployeeLanguagesAction } from '../../../store/employees-slice/employees-api-actions'

type EmployeeLanguagesFormProps = {
  closeModalHandler: () => void
}

function EmployeeLanguagesForm({ closeModalHandler }: EmployeeLanguagesFormProps): JSX.Element {
  const employee = useAppSelector(getEmployee)
  const languages = useAppSelector(getLanguages)
  const dispatch = useAppDispatch()
  const [employeeLanguages, setEmployeeLanguages] =
    useState<EmployeeLanguages>(employee?.languages || [])

  useEffect(() => {
    !languages && dispatch(fetchLanguagesAction())
  }, [])

  if (!languages || !employee) {
    return <></>
  }

  const getFilteredLanguages = (employeeLanguage?: EmployeeLanguage): Languages =>
    languages.filter((language) => {
      if (employeeLanguage?.id === String(language.id)) {
        return true
      }
      return !employeeLanguages?.map(({ id }) => id).includes(String(language.id))
    })

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent): void => {
    evt.preventDefault()
    evt.target.setAttribute('disabled', 'disabled')
    dispatch(crudEmployeeLanguagesAction({
      employeeId: employee.id,
      employeeLanguages,
      successHandler() {
        toast.success('Данные успешно обновлены')
        evt.target.removeAttribute('disabled')
        closeModalHandler()
      },
    }))
  }

  return (
    <Form>
      {employeeLanguages.map((employeeLanguage) => (
        <LanguageFields
          key={employeeLanguage.id}
          currentLanguage={employeeLanguage}
          languages={getFilteredLanguages(employeeLanguage)}
          setEmployeeLanguages={setEmployeeLanguages}
        />
      ))}

      <EmptyLanguageFields
        languages={getFilteredLanguages()}
        setEmployeeLanguages={setEmployeeLanguages}
      />

      <Buttons>
        <Button
          type="submit"
          success
          onClick={handleSubmitButtonClick}
        >
          Сохранить
        </Button>
        <Button
          type="reset"
          error
          onClick={closeModalHandler}
        >
          Отмена
        </Button>
      </Buttons>
    </Form>
  )
}

export default EmployeeLanguagesForm
