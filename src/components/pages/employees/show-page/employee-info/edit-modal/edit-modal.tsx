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
import JobsSelection from './jobs-selection/jobs-selection'
import PositionsSelection from './positions-selection/positions-selection'

type EditModalProps = {
  employee: Employee
}

function EditModal({ employee }: EditModalProps): JSX.Element {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const { name, surname, login, startedWorkAt } = employee
  const [dto, setDTO] = useState<EmployeesUpdateDTO>({
    name, surname, login, started_work_at: startedWorkAt
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const surnameRef = useRef<HTMLInputElement | null>(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleEditButtonClick = () => {
    setIsOpen(true)
    setTimeout(() => {
      if (surnameRef.current) {
        const value = surnameRef.current.value
        surnameRef.current.value = ''
        surnameRef.current.focus()
        surnameRef.current.value = value
      }
    }, 150)
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
    setValidationError({ message: '' })
  }

  const handleJobsChange = (value: string[]) => {
    setDTO((prevDTO) => {
      prevDTO = {
        ...prevDTO,
        jobs: value
      }
      setIsDisabled(() => validationError.message ? true : false)
      return prevDTO
    })
  }

  const handlePositionsChange = (value: string[]) => {
    setDTO((prevDTO) => {
      prevDTO = {
        ...prevDTO,
        positions: value
      }
      setIsDisabled(() => validationError.message ? true : false)
      return prevDTO
    })
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
            ref={surnameRef}
            name="surname"
            label="Фамилия"
            defaultValue={employee.surname}
            errorMessage={validationError.errors?.surname?.[0]}
            autoComplete="off"
          />
          <Input
            name="name"
            label="Имя"
            defaultValue={employee.name}
            errorMessage={validationError.errors?.name?.[0]}
            autoComplete="off"
          />
          <Input
            name="patronymic"
            label="Отчество"
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

          {isOpen && 
            <>
              <JobsSelection
                value={employee.jobs.map(({ id }) => id)}
                onChange={handleJobsChange}
              />
              <PositionsSelection
                value={employee.positions.map(({ id }) => id)}
                onChange={handlePositionsChange}
              />
            </>}

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