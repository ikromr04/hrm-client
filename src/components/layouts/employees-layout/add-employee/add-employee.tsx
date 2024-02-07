import { storeEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useFormValidation } from '@/hooks/use-form-validation'
import { EmployeesStoreDTO } from '@/dto/employees-dto'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import Input from '@/components/ui/input/input'
import Form from '@/components/ui/form/form'
import Text from '@/components/ui/text/text'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { toast } from 'react-toastify'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { getJobs } from '@/store/job-slice/job-selector'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'
import { getPositions } from '@/store/position-slice/position-selector'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'
import { getDepartments } from '@/store/department-slice/department-selector'
import { fetchDepartmentsAction } from '@/store/department-slice/department-api-actions'
import PlusIcon from '@/components/icons/plus-icon'
import Select from '@/components/ui/select/select'
import { FAMILY_STATUSES, GENDERS, NO_CHILDREN } from '@/const'
import { getYears } from '@/utils/employees'

function AddEmployee(): JSX.Element {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dto, setDTO] = useState<EmployeesStoreDTO>({ name: '', surname: '', login: ''})
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

  const handleAddButtonClick = () => {
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
    if (evt.target.dataset.details) {
      setDTO((prevDTO) => ({
        ...prevDTO,
        details: { ...prevDTO.details, [evt.target.name]: evt.target.value }
      }))
    } else {
      setDTO((prevDTO) => ({ ...prevDTO, [evt.target.name]: evt.target.value }))
    }
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

  const handleGenderChange = (value: string) => {
    setDTO((prevDTO) => ({
      ...prevDTO,
      details: { ...prevDTO.details, gender: value }
    }))
    setIsDisabled(false)
  }

  const handleFamilyStatusChange = (value: string) => {
    setDTO((prevDTO) => ({
      ...prevDTO,
      details: { ...prevDTO.details, family_status: value }
    }))
    setIsDisabled(false)
  }

  const handleChildrenChange = (value: string[]) => {
    setDTO((prevDTO) => ({
      ...prevDTO,
      details: { ...prevDTO.details, children: value }
    }))
    setIsDisabled(false)
  }

  return (
    <>
      <Button type="button" success onClick={handleAddButtonClick}>
        <PlusIcon /> Добавить сотрудника
      </Button>
      <Modal isOpen={isOpen}>
        <Text error>{validationError?.message}</Text> <br />
        <Form
          key={isOpen.toString().padStart(1, '0')}
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
            errorMessage={validationError.errors?.login?.[0]}
            autoComplete="off" />
          <Input
            name="started_work_at"
            type="date"
            label="Начало работы (необязательное)"
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
          <Input
            key={(+isOpen).toString().padStart(5)}
            data-details="details"
            name="nationality"
            label="Национальность (необязательное)"
            errorMessage={validationError.errors?.['details.nationality']?.[0]}
            autoComplete="off" />
          <Input
            data-details="details"
            name="birth_date"
            type="date"
            label="Дата рождения (необязательное)"
            errorMessage={validationError.errors?.['details.birth_date']?.[0]}
            autoComplete="off" />
          <Select
            label="Пол (необязательное)"
            value={dto.details?.gender || ''}
            options={[
              { value: '', label: 'Не указано' },
              ...GENDERS.map((gender) => ({ value: gender, label: gender }))
            ]}
            onChange={handleGenderChange} />
          <Input
            data-details="details"
            name="citizenship"
            label="Гражданство (необязательное)"
            errorMessage={validationError.errors?.['details.citizenship']?.[0]}
            autoComplete="off" />
          <Input
            data-details="details"
            name="address"
            label="Адрес (необязательное)"
            errorMessage={validationError.errors?.['details.address']?.[0]}
            autoComplete="off" />
          <Input
            data-details="details"
            name="email"
            label="Электронная почта (необязательное)"
            errorMessage={validationError.errors?.['details.email']?.[0]}
            autoComplete="off" />
          <Input
            data-details="details"
            name="tel_1"
            label="Тел 1 (необязательное)"
            errorMessage={validationError.errors?.['details.tel_1']?.[0]}
            autoComplete="off" />
          <Input
            data-details="details"
            name="tel_2"
            label="Тел 2 (необязательное)"
            errorMessage={validationError.errors?.['details.tel_2']?.[0]}
            autoComplete="off" />
          <Select
            label="Семейное положение (необязательное)"
            value={dto.details?.family_status || ''}
            options={[
              { value: '', label: 'Не указано' },
              ...FAMILY_STATUSES.map((status) => ({ value: status, label: status }))
            ]}
            onChange={handleFamilyStatusChange} />
          <MultiSelect
            key={(+isOpen).toString().padStart(6)}
            label="Дети (необязательное)"
            value={[]}
            onChange={handleChildrenChange}
            placeholder="Выберите возраст детей"
            options={[
              { value: '', label: 'Не указать' },
              { value: NO_CHILDREN, label: NO_CHILDREN },
              ...getYears(1970).map((year) => ({ value: year, label: year }))
            ]} />

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
    </>
  )
}

export default AddEmployee