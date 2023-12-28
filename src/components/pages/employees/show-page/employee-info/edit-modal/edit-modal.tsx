import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useFormValidation } from '@/hooks/use-form-validation'
import { EmployeesUpdateDTO } from '@/dto/employees-dto'
import Actions from '@/components/ui/actions/actions'
import EditIcon from '@/components/icons/edit-icon'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import Input from '@/components/ui/input/input'
import Form from '@/components/ui/form/form'
import { Employee } from '@/types/employees'
import Info from '@/components/ui/info/info'
import Text from '@/components/ui/text/text'
import { useAppDispatch } from '@/hooks'
import { toast } from 'react-toastify'
import { EditButton } from './styled'

type EditModalProps = {
  employee: Employee
}

function EditModal({ employee }: EditModalProps): JSX.Element {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const [dto, setDTO] = useState<EmployeesUpdateDTO>(employee)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

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
    setDTO((prevDTO) => {
      const key = evt.target.name
      prevDTO = {
        ...prevDTO,
        [key]: evt.target.value
      }
      setIsDisabled(() => {
        if (
          validationError.message || JSON.stringify(prevDTO) === JSON.stringify(employee)
        ) {
          return true
        }
        return false
      })
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
            autoComplete="off"
          />
          <Input
            name="surname"
            label="Фамилия"
            defaultValue={dto.surname}
            errorMessage={validationError.errors?.surname?.[0]}
            autoComplete="off"
          />
          <Input
            name="patronymic"
            label="Отчество"
            defaultValue={dto.patronymic}
            errorMessage={validationError.errors?.patronymic?.[0]}
            autoComplete="off"
          />
          <Input
            name="login"
            label="Логин"
            defaultValue={dto.login}
            errorMessage={validationError.errors?.login?.[0]}
            autoComplete="off"
          />
          <Input
            name="started_work_at"
            type="datetime-local"
            label="Начало работы"
            defaultValue={dto.startedWorkAt}
            errorMessage={validationError.errors?.started_work_at?.[0]}
            autoComplete="off"
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