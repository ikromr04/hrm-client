import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { useFormValidation } from '@/hooks/use-form-validation'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import Input from '@/components/ui/input/input'
import Form from '@/components/ui/form/form'
import Text from '@/components/ui/text/text'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { toast } from 'react-toastify'
import PlusIcon from '@/components/icons/plus-icon'
import { DepartmentsStoreDTO } from '@/dto/departments-dto'
import { fetchDepartmentsAction, storeDepartmentAction } from '@/store/department-slice/department-api-actions'
import { getEmployees } from '@/store/employee-slice/employees-selector'
import { getDepartments } from '@/store/department-slice/department-selector'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import Select from '@/components/ui/select/select'
import { fetchEmployeesAction } from '@/store/employee-slice/employees-api-actions'

function AddDepartment(): ReactNode {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const employees = useAppSelector(getEmployees)
  const departments = useAppSelector(getDepartments)
  const ref = useRef<HTMLInputElement | null>(null)
  const [dto, setDTO] = useState<DepartmentsStoreDTO>({ title: '', leaders: [], employees: [] })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    !employees && dispatch(fetchEmployeesAction())
    !departments && dispatch(fetchDepartmentsAction())
  }, [dispatch, employees, departments])

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
    dispatch(storeDepartmentAction({
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler() {
        toast.success('Новый отдел/департамент успешно добавлен.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
      },
    }))
  }

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    formChangeHandler(evt)
    setDTO((prevDTO) => ({ ...prevDTO, title: evt.target.value }))
    setIsDisabled(false)
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setIsDisabled(true)
    setValidationError({ message: '' })
    setDTO((prevDTO) => ({ ...prevDTO, title: '' }))
  }

  const handleParentChange = (value: string) => {
    setDTO((prevDTO) => ({ ...prevDTO, parent_id: value }))
    setIsDisabled(false)
  }

  const handleLeadersChange = (value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, leaders: value }))
    setIsDisabled(false)
  }
  const handleDepartmentEmployeesChange = (value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, employees: value }))
    setIsDisabled(false)
  }

  const handleChildrenChange = (value: string[]) => {
    setDTO((prevDTO) => ({ ...prevDTO, children: value }))
    setIsDisabled(false)
  }

  return (
    <>
      <Button type="button" success onClick={handleAddButtonClick}>
        <PlusIcon /> Добавить отдел/департамент
      </Button>
      <Modal isOpen={isOpen}>
        <Text error>{validationError?.message}</Text> <br />
        <Form
          key={isOpen.toString().padStart(1, '0')}
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
          onReset={handleFormReset}
        >
          <Input
            ref={ref}
            name="title"
            label="Отдел/департамент"
            errorMessage={validationError.errors?.title?.[0]}
            autoComplete="off" />
          {employees && <>
            <MultiSelect
              key={(+isOpen).toString().padStart(2)}
              label="Руководитель (необязательное)"
              value={dto.leaders}
              onChange={handleLeadersChange}
              options={[
                { value: '', label: 'Не указать' }, 
                ...employees.map(({ id, name, surname }) => ({ value: id, label: `${surname} ${name}` }))
              ]} />
            <MultiSelect
              key={(+isOpen).toString().padStart(3)}
              label="Сотрудники (необязательное)"
              value={dto.employees}
              onChange={handleDepartmentEmployeesChange}
              options={[
                { value: '', label: 'Не указать' }, 
                ...employees.map(({ id, name, surname }) => ({ value: id, label: `${surname} ${name}` }))
              ]} /></>}
          {departments && <>
            <Select
              label="Родительский отдел (необязательное)"
              value={dto.parent_id || ''}
              options={[
                { value: '', label: 'Не указать' },
                ...departments.map(({ id, title }) => ({ value: id, label: title }))
              ]}
              onChange={handleParentChange} />
            <MultiSelect
              key={(+isOpen).toString().padStart(3)}
              label="Дочерние подразделения (необязательное)"
              value={[]}
              onChange={handleChildrenChange}
              options={[
                { value: '', label: 'Не указать' }, 
                ...departments.map(({ id, title }) => ({ value: id, label: title }))
              ]} /></>}

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

export default AddDepartment
