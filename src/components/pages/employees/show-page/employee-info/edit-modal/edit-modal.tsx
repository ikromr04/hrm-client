import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react'
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
import { useAppDispatch, useAppSelector } from '@/hooks'
import { toast } from 'react-toastify'
import { EditButton } from './styled'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { getJobs } from '@/store/job-slice/job-selector'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'
import { getPositions } from '@/store/position-slice/position-selector'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import { getDepartments } from '@/store/department-slice/department-selector'
import { fetchDepartmentsAction } from '@/store/department-slice/department-api-actions'
import dayjs from 'dayjs'

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
  const departments = useAppSelector(getDepartments)
  const jobs = useAppSelector(getJobs)
  const positions = useAppSelector(getPositions)

  useEffect(() => {
    !departments && dispatch(fetchDepartmentsAction())
    !jobs && dispatch(fetchJobsAction())
    !positions && dispatch(fetchPositionsAction())
  }, [departments, jobs, positions, dispatch])

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

  const handleDepartmentsChange = (value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, departments: value }))
    setIsDisabled(() => validationError.message ? true : false)
  }

  const handleJobsChange = (value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, jobs: value }))
    setIsDisabled(() => validationError.message ? true : false)
  }

  const handlePositionsChange = (value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, positions: value }))
    setIsDisabled(() => validationError.message ? true : false)
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
          {departments &&
            <MultiSelect
              key={(+isOpen).toString().padStart(2)}
              label="Отдел"
              value={employee.departments.map(({ id }) => id)}
              onChange={handleDepartmentsChange}
              options={[
                { value: '', label: 'Не указать' },
                ...departments.map(({ id, title }) => ({ value: id, label: title }))
              ]} />}
          {jobs &&
            <MultiSelect
              key={(+isOpen).toString().padStart(3)}
              label="Должность"
              value={employee.jobs.map(({ id }) => id)}
              onChange={handleJobsChange}
              options={[
                { value: '', label: 'Не указать' },
                ...jobs.map(({ id, title }) => ({ value: id, label: title }))
              ]} />}
          {positions &&
            <MultiSelect
              key={(+isOpen).toString().padStart(4)}
              label="Позиция"
              value={employee.positions.map(({ id }) => id)}
              onChange={handlePositionsChange}
              options={[
                { value: '', label: 'Не указать' },
                ...positions.map(({ id, title }) => ({ value: id, label: title }))
              ]} />}

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
