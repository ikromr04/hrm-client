import { BaseSyntheticEvent, useRef, useState } from 'react'
import Input from '../../ui/input/input'
import Select from '../../ui/select/select'
import { Form, WideColumn } from './styled'
import { ValidationError } from '../../../types/validation-error'
import { useAppDispatch } from '../../../hooks'
import { toast } from 'react-toastify'
import {
  updateEmployeeEducationAction
} from '../../../store/employees-slice/employees-api-actions'
import Buttons from '../../ui/buttons/buttons'
import Button from '../../ui/button/button'
import { Education } from '../../../types/employee'
import { educationFormOptions } from '../../../const'
import { debounce } from '../../../utils'

type CreateEducationFormProps = {
  education: Education
  closeModalHandler: () => void
}

function EditEducationForm({
  education,
  closeModalHandler
}: CreateEducationFormProps): JSX.Element {
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
  const [form, setForm] = useState(education.form)
  const dispatch = useAppDispatch()
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
    formRef.current && dispatch(updateEmployeeEducationAction({
      formData: new FormData(formRef.current),
      educationId: education.id,
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
        defaultValue={education.startedAt}
        errorMessage={validationError?.errors?.started_at?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Год окончания"
        type="datetime-local"
        name="graduated_at"
        defaultValue={education.graduatedAt}
        errorMessage={validationError?.errors?.graduated_at?.[0]}
        onInput={handleInputsChange}
      />
      <WideColumn>
        <Input
          label="Учебное заведение"
          type="text"
          name="institution"
          defaultValue={education.institution}
          errorMessage={validationError?.errors?.institution?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>
      <WideColumn>
        <Input
          label="Факультет"
          type="text"
          name="faculty"
          defaultValue={education.faculty}
          errorMessage={validationError?.errors?.faculty?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>
      <Select
        label="Форма обучения"
        name="form"
        value={form}
        onChange={(evt: BaseSyntheticEvent) => setForm(evt.target.value)}
        options={educationFormOptions}
      />
      <Input
        label="Специальность"
        type="text"
        name="speciality"
        defaultValue={education.speciality}
        errorMessage={validationError?.errors?.speciality?.[0]}
        onInput={handleInputsChange}
      />

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

export default EditEducationForm
