import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Form from '@/components/ui/form/form'
import Input from '@/components/ui/input/input'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { AuthStoreDTO } from '@/dto/auth-dto'
import { useAppDispatch } from '@/hooks'
import { useFormValidation } from '@/hooks/use-form-validation'
import { AuthStoreResponse } from '@/responses/auth-reponses'
import { storeAuthAction } from '@/store/auth-slice/auth-api-actions'
import { BaseSyntheticEvent, ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Response } from './styled'
import CopyBox from '@/components/ui/copy-box/copy-box'

type EmployeeModalProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function EmployeeModal({ isOpen, setIsOpen }: EmployeeModalProps): JSX.Element {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [dto, setDTO] = useState<AuthStoreDTO>({ name: '', surname: '', login: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const [response, setResponse] = useState<AuthStoreResponse | null>(null)

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

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(storeAuthAction({
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler(response) {
        setIsSubmitting(false)
        setIsDisabled(true)
        evt.target.reset()
        setDTO({ name: '', surname: '', login: '' })
        setResponse(response)
      },
    }))
  }

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    formChangeHandler(evt)
    setDTO((prevDTO) => ({ ...prevDTO, [evt.target.name]: evt.target.value }))
    setIsDisabled(() => validationError.message ? true : false)
    setResponse(null)
  }

  const handleResetButtonClick = () => {
    setIsOpen(false)
    setIsDisabled(true)
    setValidationError({ message: '' })
    setDTO({ name: '', surname: '', login: '' })
    setResponse(null)
  }

  return (
    <Modal isOpen={isOpen}>
      {response &&
        <Response>
          <Text success>Сотрудник успешно добавлен</Text>
          <CopyBox copyText={`Логин: ${response.login}\nПароль: ${response.password}`}>
            Логин: {response.login} <br />
            Пароль: {response.password}
          </CopyBox>
        </Response>
      }
      <Text error>{validationError?.message}</Text> <br />
      <Form
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
      >
        <Input
          ref={ref}
          name="name"
          label="Имя"
          errorMessage={validationError.errors?.name?.[0]}
          autoComplete="off" />
        <Input
          name="surname"
          label="Фамилия"
          errorMessage={validationError.errors?.surname?.[0]}
          autoComplete="off" />
        <Input
          name="login"
          label="Логин"
          errorMessage={validationError.errors?.login?.[0]}
          autoComplete="off" />

        <Actions>
          <Button
            type="submit"
            success
            loading={isSubmitting}
            disabled={isDisabled || isSubmitting}
          >
            Добавить
          </Button>
          <Button
            type="reset"
            error
            onClick={handleResetButtonClick}
          >
            Отмена
          </Button>
        </Actions>
      </Form>
    </Modal>
  )
}

export default EmployeeModal