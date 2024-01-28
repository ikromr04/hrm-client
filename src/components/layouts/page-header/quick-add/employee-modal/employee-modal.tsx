import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Form from '@/components/ui/form/form'
import Input from '@/components/ui/input/input'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useFormValidation } from '@/hooks/use-form-validation'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { EmployeesStoreDTO } from '@/dto/employees-dto'
import { getDepartments } from '@/store/department-slice/department-selector'
import { getJobs } from '@/store/job-slice/job-selector'
import { getPositions } from '@/store/position-slice/position-selector'
import { fetchDepartmentsAction } from '@/store/department-slice/department-api-actions'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import { storeEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { toast } from 'react-toastify'
import MultiSelect from '@/components/ui/multi-select/multi-select'

type EmployeeModalProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function EmployeeModal({ isOpen, setIsOpen }: EmployeeModalProps): JSX.Element {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dto, setDTO] = useState<EmployeesStoreDTO>({ name: '', surname: '', login: ''})
  const dispatch = useAppDispatch()
  const departments = useAppSelector(getDepartments)
  const jobs = useAppSelector(getJobs)
  const positions = useAppSelector(getPositions)

  useEffect(() => {
    !departments && dispatch(fetchDepartmentsAction())
    !jobs && dispatch(fetchJobsAction())
    !positions && dispatch(fetchPositionsAction())
    setTimeout(() => {
      if (ref.current) {
        const value = ref.current.value
        ref.current.value = ''
        ref.current.focus()
        ref.current.value = value
      }
    }, 150)
  }, [departments, jobs, positions, dispatch, isOpen])

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(storeEmployeeAction({
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler() {
        toast.success('Новый сотрудник успешно добавлен.')
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
    setDTO({ name: '', surname: '', login: ''})
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
            errorMessage={validationError.errors?.surname?.[0]}
            autoComplete="off" />
          <Input
            name="name"
            label="Имя"
            errorMessage={validationError.errors?.name?.[0]}
            autoComplete="off" />
          <Input
            name="patronymic"
            label="Отчество (необязательное)"
            errorMessage={validationError.errors?.patronymic?.[0]}
            autoComplete="off" />
          <Input
            name="login"
            label="Логин"
            defaultValue={dto.login}
            errorMessage={validationError.errors?.login?.[0]}
            autoComplete="off" />
          <Input
            name="started_work_at (необязательное)"
            type="datetime-local"
            label="Начало работы"
            errorMessage={validationError.errors?.started_work_at?.[0]}
            autoComplete="off" />
          {departments && 
            <MultiSelect
              key={(+isOpen).toString().padStart(2)}
              label="Отдел (необязательное)"
              value={[]}
              onChange={handleDepartmentsChange}
              options={[
                { value: '', label: 'Не указать' }, 
                ...departments.map(({ id, title }) => ({ value: id, label: title }))
              ]} />}
          {jobs && 
            <MultiSelect
              key={(+isOpen).toString().padStart(3)}
              label="Должность (необязательное)"
              value={[]}
              onChange={handleJobsChange}
              options={[
                { value: '', label: 'Не указать' }, 
                ...jobs.map(({ id, title }) => ({ value: id, label: title }))
              ]} />}
          {positions &&
            <MultiSelect
              key={(+isOpen).toString().padStart(4)}
              label="Позиция (необязательное)"
              value={[]}
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
              Добавить
            </Button>
            <Button type="reset" error>
              Отмена
            </Button>
          </Actions>
        </Form>
    </Modal>
  )
}

export default EmployeeModal