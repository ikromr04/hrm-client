import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { ReactNode, memo, useEffect, useState } from 'react'
import { EmployeesUpdateDTO } from '@/dto/employees-dto'
import Actions from '@/components/ui/actions/actions'
import EditIcon from '@/components/icons/edit-icon'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import Form from '@/components/ui/form/form'
import Info from '@/components/ui/info/info'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { toast } from 'react-toastify'
import { EditButton } from './styled'
import { getLanguages } from '@/store/language-slice/language-selector'
import { fetchLanguagesAction } from '@/store/language-slice/language-api-actions'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import LanguageFields from './language-fields/language-fields'
import { Languages } from '@/types/languages'
import { EmployeeLanguage } from '@/types/employees'
import EmptyLanguageFields from './empty-language-fields/empty-language-fields'

function EditModal(): ReactNode {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dto, setDTO] = useState<EmployeesUpdateDTO>({})
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const languages = useAppSelector(getLanguages)
  const employee = useAppSelector(getEmployee)

  useEffect(() => {
    !languages && dispatch(fetchLanguagesAction())
    employee && setDTO({ languages: employee.languages })
  }, [languages, employee, dispatch])

  if (!employee || !languages) {
    return <></>
  }

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateEmployeeAction({
      id: employee.id,
      dto,
      errorHandler() {
        setIsSubmitting(false)
      },
      successHandler() {
        toast.success('Данные успешно обновлены.')
        setIsSubmitting(false)
        setIsOpen(false)
      },
    }))
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setDTO({ languages: employee.languages })
  }

  const getFilteredLanguages = (language?: EmployeeLanguage): Languages =>
    languages.filter((lang) => {
      if (language?.id === lang.id) {
        return true
      }
      return !dto.languages?.map(({ id }) => id).includes(lang.id)
    })

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpen(true)}>
        <EditIcon /> <Info top>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen}>
        <Form onSubmit={handleFormSubmit} onReset={handleFormReset}>
          {dto.languages?.map((language) => (
            <LanguageFields
              key={language.id}
              currentLanguage={language}
              languages={getFilteredLanguages(language)}
              setDTO={setDTO}
            />
          ))}

          <EmptyLanguageFields languages={getFilteredLanguages()} setDTO={setDTO} />

          <Actions>
            <Button
              type="submit"
              success
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Сохранить
            </Button>
            <Button type="reset" error>
              Отмена
            </Button>
          </Actions>
        </Form>
      </Modal>
    </>
  )
}

export default memo(EditModal)
