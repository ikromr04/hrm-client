import { BaseSyntheticEvent, useState } from 'react'
import { Form } from './styled'
import { toast } from 'react-toastify'
import JobSelect from './job-select/job-select'
import PositionSelect from './position-select/position-select'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { ValidationError } from '@/types/validation-error'
import { EmployeeUpdateDTO } from '@/dto/employees'
import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import Input from '@/components/ui/input/input'
import Buttons from '@/components/ui/buttons/buttons'
import Button from '@/components/ui/button/button'

type EmployeeEditFormProps = {
  closeModalHandler: () => void
}

function EmployeeEditForm({ closeModalHandler }: EmployeeEditFormProps): JSX.Element {
  const dispatch = useAppDispatch()
  const employee = useAppSelector(getEmployee)
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
  const [dto, setDTO] = useState<EmployeeUpdateDTO>({
    name: employee?.name || '',
    surname: employee?.surname || '',
    patronymic: employee?.patronymic || '',
    login: employee?.login || '',
    started_work_at: employee?.startedWorkAt || new Date(),
    jobs: employee?.jobs?.map(({ id }) => id) || [],
    positions: employee?.positions?.map(({ id }) => id) || [],
  })

  if (!employee) {
    return <></>
  }

  const handleInputsChange = (evt: BaseSyntheticEvent): void => {
    setDTO((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState))
      newState[evt.target.name] = evt.target.value
      return newState
    })
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState))
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      }
    })
  }

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault()
    evt.target.setAttribute('disabled', 'disabled')
    dispatch(updateEmployeeAction({
      dto,
      employeeId: employee.id,
      errorHandler(error) {
        evt.target.removeAttribute('disabled')
        setValidationError(error)
      },
      successHandler() {
        evt.target.removeAttribute('disabled')
        toast.success('Данные успешно сохранены')
        closeModalHandler()
      },
    }))
  }

  return (
    <Form>
      <Input
        label="Имя"
        type="text"
        name="name"
        defaultValue={dto.name}
        errorMessage={validationError?.errors?.name?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Фамилия"
        type="text"
        name="surname"
        defaultValue={dto.surname}
        errorMessage={validationError?.errors?.surname?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Отчество"
        type="text"
        name="patronymic"
        defaultValue={dto.patronymic}
        errorMessage={validationError?.errors?.patronymic?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Логин"
        type="text"
        name="login"
        defaultValue={dto.login}
        errorMessage={validationError?.errors?.login?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Начало работы"
        type="datetime-local"
        name="started_work_at"
        defaultValue={dto.started_work_at}
        errorMessage={validationError?.errors?.started_work_at?.[0]}
        onInput={handleInputsChange}
      />
      <JobSelect dto={dto} setDTO={setDTO} />
      <PositionSelect dto={dto} setDTO={setDTO} />

      <Buttons>
        <Button
          type="submit"
          success
          onClick={handleSubmitButtonClick}
        >
          Сохранить
        </Button>
        <Button
          type="reset"
          error
          onClick={() => closeModalHandler()}
        >
          Отмена
        </Button>
      </Buttons>
    </Form>
  )
}

export default EmployeeEditForm
