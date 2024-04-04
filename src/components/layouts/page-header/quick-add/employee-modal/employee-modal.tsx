import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Form from '@/components/ui/form/form'
import Input from '@/components/ui/input/input'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useAppDispatch } from '@/hooks'
import { useFormValidation } from '@/hooks/use-form-validation'
import { ChangeEvent, Dispatch, ReactNode, SetStateAction, memo, useCallback, useEffect, useRef, useState } from 'react'
import { EmployeesStoreDTO } from '@/dto/employees-dto'
import { storeEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { toast } from 'react-toastify'
import DepartmentsSelection from './departments-selection/departments-selection'
import JobsSelection from './jobs-selection/jobs-selection'
import PositionsSelection from './positions-selection/positions-selection'

function EmployeeModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}): ReactNode {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dto, setDTO] = useState<EmployeesStoreDTO>({ name: '', surname: '', login: '' })
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        const value = ref.current.value
        ref.current.value = ''
        ref.current.focus()
        ref.current.value = value
      }
    }, 150)
  }, [isOpen])

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
    setDTO({ name: '', surname: '', login: '' })
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
          name="started_work_at (необязательное)"
          type="date"
          label="Начало работы"
          errorMessage={validationError.errors?.started_work_at?.[0]}
          autoComplete="off" />
        <DepartmentsSelection
          isOpen={isOpen}
          onChange={handleDepartmentsChange}
        />
        <JobsSelection
          isOpen={isOpen}
          onChange={handleJobsChange}
        />
        <PositionsSelection
          isOpen={isOpen}
          onChange={handlePositionsChange}
        />

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

export default memo(EmployeeModal)
