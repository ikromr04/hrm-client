import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { ChangeEvent, useRef, useState } from 'react'
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
import Select from '@/components/ui/select/select'
import { GENDERS } from '@/const'

type EditModalProps = {
  employee: Employee
}

function EditModal({ employee }: EditModalProps): JSX.Element {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const { name, surname, login, avatar, startedWorkAt, details } = employee
  const [dto, setDTO] = useState<EmployeesUpdateDTO>({
    name, surname, login, avatar, started_work_at: startedWorkAt
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef<HTMLInputElement | null>(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [gender, setGender] = useState('')
  const dispatch = useAppDispatch()

  const handleEditButtonClick = () => {
    setIsOpen(true)
    setTimeout(() => ref.current?.focus(), 150)
  }

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateEmployeeAction({
      id: employee.id,
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler() {
        toast.success('Данные успешно обновлены.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
      },
    }))
  }

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    formChangeHandler(evt)
    setDTO((prevDTO) => {
      const keyName = evt.target.name
      prevDTO = {
        ...prevDTO,
        [keyName]: evt.target.value
      }
      setIsDisabled(() => validationError.message ? true : false)
      return prevDTO
    })
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setIsDisabled(true)
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
            ref={ref}
            name="birth_date"
            type="datetime-local"
            label="Дата рождения"
            defaultValue={details.birthDate}
            errorMessage={validationError.errors?.['details.birth_date']?.[0]}
            autoComplete="off"
          />
          <Select
            label="Пол"
            value={gender}
            options={[
              { value: '', label: 'Не указано' },
              ...GENDERS.map((gender) => ({ value: gender, label: gender }))
            ]}
            onChange={(value) => setGender(value)}
          />
          <Input
            name="patronymic"
            label="Отчество (необязательное)"
            defaultValue={employee.patronymic}
            errorMessage={validationError.errors?.patronymic?.[0]}
            autoComplete="off"
          />
          <Input
            name="login"
            label="Логин"
            defaultValue={employee.login}
            errorMessage={validationError.errors?.login?.[0]}
            autoComplete="off"
          />
          <Input
            name="started_work_at"
            type="datetime-local"
            label="Начало работы"
            defaultValue={employee.startedWorkAt}
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