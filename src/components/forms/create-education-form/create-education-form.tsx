import { BaseSyntheticEvent, useRef, useState } from 'react'
import { Form, WideColumn } from './styled'
import { toast } from 'react-toastify'
import { ValidationError } from '@/types/validation-error'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { debounce } from '@/utils'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { storeEmployeeEducationAction } from '@/store/employee-slice/employees-api-actions'
import Input from '@/components/ui/input/input'
import Select from '@/components/ui/select/select'
import { educationFormOptions } from '@/const'
import Buttons from '@/components/ui/buttons/buttons'
import Button from '@/components/ui/button/button'

type CreateEducationFormProps = {
  closeModalHandler: () => void
}

function CreateEducationForm({ closeModalHandler }: CreateEducationFormProps): JSX.Element {
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
    formRef.current && employee?.id && dispatch(storeEmployeeEducationAction({
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
        label="Год поступления"
        type="datetime-local"
        name="started_at"
        errorMessage={validationError?.errors?.started_at?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Год окончания"
        type="datetime-local"
        name="graduated_at"
        errorMessage={validationError?.errors?.graduated_at?.[0]}
        onInput={handleInputsChange}
      />
      <WideColumn>
        <Input
          label="Учебное заведение"
          type="text"
          name="institution"
          errorMessage={validationError?.errors?.institution?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>
      <WideColumn>
        <Input
          label="Факультет"
          type="text"
          name="faculty"
          errorMessage={validationError?.errors?.faculty?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>
      <Select
        label="Форма обучения"
        name="form"
        options={educationFormOptions}
      />
      <Input
        label="Специальность"
        type="text"
        name="speciality"
        errorMessage={validationError?.errors?.speciality?.[0]}
        onInput={handleInputsChange}
      />

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

export default CreateEducationForm
