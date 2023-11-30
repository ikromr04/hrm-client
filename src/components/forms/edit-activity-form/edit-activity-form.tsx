import { BaseSyntheticEvent, useRef, useState } from 'react'
import Input from '../../ui/input/input'
import { Form, WideColumn } from './styled'
import { ValidationError } from '../../../types/validation-error'
import { useAppDispatch } from '../../../hooks'
import { toast } from 'react-toastify'
import {
  updateEmployeeActivityAction,
} from '../../../store/employees-slice/employees-api-actions'
import Buttons from '../../ui/buttons/buttons'
import Button from '../../ui/button/button'
import { Activity } from '../../../types/employee'
import { debounce } from '../../../utils'

type EditActivityFormProps = {
  activity: Activity
  closeModalHandler: () => void
}

function EditActivityForm({
  activity,
  closeModalHandler
}: EditActivityFormProps): JSX.Element {
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
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
    formRef.current && dispatch(updateEmployeeActivityAction({
      formData: new FormData(formRef.current),
      activityId: activity.id,
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
        defaultValue={activity.hiredAt}
        errorMessage={validationError?.errors?.hired_at?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Год уволнения"
        type="datetime-local"
        name="dismissed_at"
        defaultValue={activity.dismissedAt}
        errorMessage={validationError?.errors?.dismissed_at?.[0]}
        onInput={handleInputsChange}
      />
      <WideColumn>
        <Input
          label="Организация"
          type="text"
          name="organization"
          defaultValue={activity.organization}
          errorMessage={validationError?.errors?.organization?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>
      <WideColumn>
        <Input
          label="Должность"
          type="text"
          name="job"
          defaultValue={activity.job}
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

export default EditActivityForm
