import { BaseSyntheticEvent, useRef, useState } from 'react'
import { Form, WideColumn } from './styled'
import { toast } from 'react-toastify'
import { storeEmployeeActivityAction } from '@/store/employee-slice/employees-api-actions'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { debounce } from '@/utils'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { ValidationError } from '@/types/validation-error'
import Input from '@/components/ui/input/input'
import Buttons from '@/components/ui/buttons/buttons'
import Button from '@/components/ui/button/button'

type CreateActivityFormProps = {
  closeModalHandler: () => void
}

function CreateActivityForm({ closeModalHandler }: CreateActivityFormProps): JSX.Element {
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
  const dispatch = useAppDispatch()
  const employee = useAppSelector(getEmployee)
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleInputsChange = debounce((evt: BaseSyntheticEvent) =>
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState))
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      }
  }))

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault()
    evt.target.setAttribute('disabled', 'disabled')
    formRef.current && employee?.id && dispatch(storeEmployeeActivityAction({
      formData: new FormData(formRef.current),
      employeeId: employee.id,
      errorHandler(error) {
        evt.target.removeAttribute('disabled')
        setValidationError(error)
      },
      successHandler() {
        evt.target.removeAttribute('disabled')
        toast.success('Данные успешно обновлены')
        closeModalHandler()
      },
    }))
  }

  return (
    <Form ref={formRef}>
      <Input
        label="Дата принятия"
        type="datetime-local"
        name="hired_at"
        errorMessage={validationError?.errors?.hired_at?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Год уволнения"
        type="datetime-local"
        name="dismissed_at"
        errorMessage={validationError?.errors?.dismissed_at?.[0]}
        onInput={handleInputsChange}
      />
      <WideColumn>
        <Input
          label="Организация"
          type="text"
          name="organization"
          errorMessage={validationError?.errors?.organization?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>
      <WideColumn>
        <Input
          label="Должность"
          type="text"
          name="job"
          errorMessage={validationError?.errors?.job?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>

      <Buttons>
        <Button
          type="submit"
          success
          onClick={handleSubmitButtonClick}
        >
          Добавить
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

export default CreateActivityForm
