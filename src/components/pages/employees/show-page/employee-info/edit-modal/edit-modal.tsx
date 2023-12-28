import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import Form from '@/components/ui/form/form'
import Input from '@/components/ui/input/input'
import { useAppDispatch } from '@/hooks'
import { EmployeesUpdateDTO } from '@/dto/employees-dto'
import { useFormValidation } from '@/hooks/use-form-validation'
import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { Employee } from '@/types/employees'
import { EditButton } from './styled'
import EditIcon from '@/components/icons/edit-icon'
import Info from '@/components/ui/info/info'
import Text from '@/components/ui/text/text'
import { toast } from 'react-toastify'

type EditModalProps = {
  employee: Employee
}

function EditModal({ employee }: EditModalProps): JSX.Element {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dto, setDTO] = useState<EmployeesUpdateDTO>(employee)
  const [isDisabled, setIsDisabled] = useState(true)
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const nameRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setDTO(employee)
  }, [employee])

  const handleEditButtonClick = () => {
    setIsOpen(true)
    setTimeout(() => {
      nameRef.current?.focus()
    }, 150)
  }

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateEmployeeAction({
      id: employee.id,
      dto,
      errorHandler(error) {
        setIsSubmitting(false)
        setValidationError(error)
        setIsDisabled(true)
      },
      successHandler() {
        setIsSubmitting(false)
        setIsDisabled(true)
        toast.success('Данные успешно обновлены.')
      },
    }))
  }

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    formChangeHandler(evt)
    setIsDisabled(() => {
      if (validationError.message) {
        return true
      }
      return false
    })
    setDTO((prevDTO) => {
      const key = evt.target.name
      prevDTO = {
        ...prevDTO,
        [key]: evt.target.value
      }
      return prevDTO
    })
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setDTO(employee)
  }

  return (
    <>
      <EditButton type="button" onClick={handleEditButtonClick}>
        <EditIcon /> <Info top>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen}>
        <Text error>{validationError?.message}</Text> <br />
        <Form
          grid
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
          onReset={handleFormReset}
        >
          <Input
            ref={nameRef}
            name="name"
            label="Имя"
            defaultValue={dto.name}
            errorMessage={validationError.errors?.name?.[0]}
          />
          <Input
            name="surname"
            label="Фамилия"
            defaultValue={dto.surname}
            errorMessage={validationError.errors?.surname?.[0]}
          />
          <Input
            name="patronymic"
            label="Отчество"
            defaultValue={dto.patronymic}
            errorMessage={validationError.errors?.patronymic?.[0]}
          />
          <Input
            name="login"
            label="Логин"
            defaultValue={dto.login}
            errorMessage={validationError.errors?.login?.[0]}
          />
          <Input
            name="started_work_at"
            type="datetime-local"
            label="Начало работы"
            defaultValue={dto.startedWorkAt}
            errorMessage={validationError.errors?.started_work_at?.[0]}
          />

          <Actions>
            <Button
              type="submit"
              success
              loading={isSubmitting}
              disabled={isDisabled || isSubmitting}
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

export default EditModal