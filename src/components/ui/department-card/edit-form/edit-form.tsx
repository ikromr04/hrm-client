import { DepartmentsUpdateDTO } from '@/dto/departments-dto'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useFormValidation } from '@/hooks/use-form-validation'
import { fetchDepartmentsAction, updateDepartmentAction } from '@/store/department-slice/department-api-actions'
import { Department } from '@/types/departments'
import { BaseSyntheticEvent, ChangeEvent, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../button/button'
import Colspan from '../../colspan/colspan'
import Input from '../../input/input'
import { getEmployees } from '@/store/employee-slice/employees-selector'
import { fetchEmployeesAction } from '@/store/employee-slice/employees-api-actions'
import MultiSelect from '../../multi-select/multi-select'
import Actions from '../../actions/actions'
import { getDepartments } from '@/store/department-slice/department-selector'
import { Form } from '../styled'
import Select from '../../select/select'
import { ID } from '@/types'

function EditForm({
  department,
  isOpen,
  setIsOpen,
}: {
  department: Department
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}): ReactNode {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const employees = useAppSelector(getEmployees)
  const departments = useAppSelector(getDepartments)
  const leaders: ID[] = department.employees?.filter(({ leader }) => leader)?.map(({ id }) => id) || []
  const departmentEmployees: ID[] = department.employees?.filter(({ leader }) => !leader)?.map(({ id }) => id) || []
  const [dto, setDTO] = useState<DepartmentsUpdateDTO>({ leaders, employees: departmentEmployees })

  useEffect(() => {
    !employees && dispatch(fetchEmployeesAction())
    !departments && dispatch(fetchDepartmentsAction())
  }, [dispatch, employees, departments])

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateDepartmentAction({
      id: department.id,
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
        setDTO({ leaders, employees: departmentEmployees })
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
    setDTO({ leaders, employees: departmentEmployees })
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
    <Form
      onSubmit={handleFormSubmit}
      onChange={handleFormChange}
      onReset={handleFormReset}
    >
      <Colspan span={2}>
        <Input
          name="title"
          label="Название отдел/департамент"
          defaultValue={department.title}
          errorMessage={validationError.errors?.title?.[0]}
          autoComplete="off" />
      </Colspan>
      {employees &&
        <>
          <MultiSelect
            key={(+isOpen).toString().padStart(2)}
            label="Руководитель (необязательное)"
            value={leaders}
            onChange={handleLeadersChange}
            options={[
              { value: '', label: 'Не указать' }, 
              ...employees.map(({ id, name, surname }) => ({ value: id, label: `${surname} ${name}` }))
            ]} />
          <MultiSelect
            key={(+isOpen).toString().padStart(3)}
            label="Сотрудники (необязательное)"
            value={departmentEmployees}
            onChange={handleDepartmentEmployeesChange}
            options={[
              { value: '', label: 'Не указать' }, 
              ...employees.map(({ id, name, surname }) => ({ value: id, label: `${surname} ${name}` }))
            ]} />
        </>}
      {departments &&
        <Select
          label="Родительский отдел (необязательное)"
          value={dto.parent_id || ''}
          options={[
            { value: '', label: 'Не указать' },
            ...departments.filter(({ id }) => id !== department.id).map(({ id, title }) => ({ value: id, label: title }))
          ]}
          onChange={handleParentChange} />}
      {departments &&
        <MultiSelect
          key={(+isOpen).toString().padStart(3)}
          label="Дочерние подразделения (необязательное)"
          value={(department.children || []).map(({ id }) => id)}
          onChange={handleChildrenChange}
          options={[
            { value: '', label: 'Не указать' }, 
            ...departments.map(({ id, title }) => ({ value: id, label: title }))
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
  )
}

export default EditForm
