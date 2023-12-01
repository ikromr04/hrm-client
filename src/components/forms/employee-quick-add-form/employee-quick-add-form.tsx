import { BaseSyntheticEvent, useState } from 'react'
import { CopyButton, Form, ResponseObject, SuccessText } from './styled'
import { ValidationError } from '@/types/validation-error'
import { EmployeeQuickAddDTO } from '@/dto/employees'
import { useAppDispatch } from '@/hooks'
import { EmployeeQuickAddResponse } from '@/response/employees'
import { addEmployeeQuickAction } from '@/store/employee-slice/employees-api-actions'
import CheckIcon from '@/components/icons/check-icon'
import CopyIcon from '@/components/icons/copy-icon'
import Buttons from '@/components/ui/buttons/buttons'
import Button from '@/components/ui/button/button'
import Input from '@/components/ui/input/input'

type EmployeeQuickAddFormProps = {
  closeModalHandler: () => void
}

function EmployeeQuickAddForm({ 
  closeModalHandler 
}: EmployeeQuickAddFormProps): JSX.Element {
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
  const [dto, setDTO] = useState<EmployeeQuickAddDTO>({
    name: '',
    surname: '',
    patronymic: '',
    login: '',
  })
  const dispatch = useAppDispatch()
  const [success, setSuccess] = useState<EmployeeQuickAddResponse | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  const handleFieldsInput = (evt: BaseSyntheticEvent): void => {
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
    dispatch(addEmployeeQuickAction({
      dto,
      errorHandler(error) {
        evt.target.removeAttribute('disabled')
        setValidationError(error)
      },
      successHandler(responseObject) {
        evt.target.removeAttribute('disabled')
        setSuccess(responseObject)
      },
    }))
  }

  const handleOkClick = () => {
    setSuccess(null)
    setDTO({
      name: '',
      surname: '',
      patronymic: '',
      login: '',
    })
  }

  const handleCopyClick = () => {
    if (success) {
      const copyText = document.createElement('textarea')
      copyText.value = `Логин: ${success.login}\nПароль: ${success.password}`
      document.body.appendChild(copyText)
      copyText.select()
      document.execCommand('copy')
      document.body.removeChild(copyText)

      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }

  if (success) {
    return (
      <Form>
        <SuccessText>
          <CheckIcon width={16} height={16} />
          Новый сотрудник добавлен
        </SuccessText>

        <ResponseObject>
          Логин: <em>{success.login}</em> <br />
          Пароль: <em>{success.password}</em>
          <CopyButton type="button" onClick={handleCopyClick}>
            {isCopied
              ? <CheckIcon width={16} height={16} />
              : <CopyIcon width={16} height={16} />}
          </CopyButton>
        </ResponseObject>

        <Buttons>
          <Button
            type="submit"
            success
            onClick={handleOkClick}
          >
            Ок
          </Button>
        </Buttons>
      </Form>
    )
  }

  return (
    <Form>
      <Input
        label="Фамилия"
        type="text"
        name="surname"
        errorMessage={validationError?.errors?.surname?.[0]}
        defaultValue={dto.surname}
        onInput={handleFieldsInput}
      />
      <Input
        label="Имя"
        type="text"
        name="name"
        errorMessage={validationError?.errors?.name?.[0]}
        defaultValue={dto.name}
        onInput={handleFieldsInput}
      />
      <Input
        label="Отчество (необязательно)"
        type="text"
        name="patronymic"
        errorMessage={validationError?.errors?.patronymic?.[0]}
        defaultValue={dto.patronymic}
        onInput={handleFieldsInput}
      />
      <Input
        label="Логин"
        type="text"
        name="login"
        errorMessage={validationError?.errors?.login?.[0]}
        defaultValue={dto.login}
        onInput={handleFieldsInput}
      />

      <Buttons>
        <Button
          type="submit"
          success
          onClick={handleSubmitButtonClick}
        >
          Создать
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

export default EmployeeQuickAddForm
