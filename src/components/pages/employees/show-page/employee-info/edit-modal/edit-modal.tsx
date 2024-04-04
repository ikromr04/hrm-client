import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { ChangeEvent, ReactNode, useCallback, useRef, useState } from 'react'
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
import dayjs from 'dayjs'
import DepartmentsSelection from './departments-selection/departments-selection'
import JobsSelection from './jobs-selection/jobs-selection'
import PositionsSelection from './positions-selection/positions-selection'

function EditModal({
  employee
}: {
  employee: Employee
}): ReactNode {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dto, setDTO] = useState<EmployeesUpdateDTO>({})
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleEditButtonClick = () => {
    setIsOpen(true)
    setTimeout(() => {
      if (ref.current) {
        const value = ref.current.value
        ref.current.value = ''
        ref.current.focus()
        ref.current.value = value
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
    setDTO((prevDTO) => ({ ...prevDTO, [evt.target.name]: evt.target.value }))
    setIsDisabled(() => validationError.message ? true : false)
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setIsDisabled(true)
    setValidationError({ message: '' })
    setDTO({})
  }

  const handleDepartmentsChange = useCallback((value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, departments: value }))
    setIsDisabled(() => validationError.message ? true : false)
  }, [validationError.message])

  const handleJobsChange = useCallback((value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, jobs: value }))
    setIsDisabled(() => validationError.message ? true : false)
  }, [validationError.message])

  const handlePositionsChange = useCallback((value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, positions: value }))
    setIsDisabled(() => validationError.message ? true : false)
  }, [validationError.message])

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
            name="surname"
            label="Фамилия"
            defaultValue={employee.surname}
            errorMessage={validationError.errors?.surname?.[0]}
            autoComplete="off" />
          <Input
            name="name"
            label="Имя"
            defaultValue={employee.name}
            errorMessage={validationError.errors?.name?.[0]}
            autoComplete="off" />
          <Input
            name="patronymic"
            label="Отчество"
            defaultValue={employee.patronymic}
            errorMessage={validationError.errors?.patronymic?.[0]}
            autoComplete="off" />
          <Input
            name="login"
            label="Логин"
            defaultValue={employee.login}
            errorMessage={validationError.errors?.login?.[0]}
            autoComplete="off" />
          <Input
            name="started_work_at"
            type="date"
            label="Начало работы"
            defaultValue={dayjs(employee.startedWorkAt).format('YYYY-MM-DD')}
            errorMessage={validationError.errors?.started_work_at?.[0]}
            autoComplete="off" />
          <DepartmentsSelection
            isOpen={isOpen}
            value={employee.departments.map(({ id }) => id)}
            onChange={handleDepartmentsChange}
          />
          <JobsSelection
            isOpen={isOpen}
            value={employee.jobs.map(({ id }) => id)}
            onChange={handleJobsChange}
          />
          <PositionsSelection
            isOpen={isOpen}
            value={employee.positions.map(({ id }) => id)}
            onChange={handlePositionsChange}
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
