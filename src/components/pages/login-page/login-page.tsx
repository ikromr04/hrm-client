import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Form, Main } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { AuthorizationStatus, AppRoute } from '@/const'
import { Navigate } from 'react-router-dom'
import MainLogo from '@/components/ui/main-logo/main-logo'
import Title from '@/components/ui/title/title'
import Text from '@/components/ui/text/text'
import Button from '@/components/ui/button/button'
import Input from '@/components/ui/input/input'
import { useFormValidation } from '@/hooks/use-form-validation'
import Spinner from '@/components/ui/spinner/spinner'
import { getAuthStatus } from '@/store/auth-slice/auth-selector'
import { loginAction } from '@/store/auth-slice/auth-api-actions'

function LoginPage(): JSX.Element {
  const { validationError, setValidationError, formChangeHandler } = useFormValidation()
  const authorizationStatus = useAppSelector(getAuthStatus)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const dispatch = useAppDispatch()

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(loginAction({
      dto: { login, password },
      errorHandler(error) {
        setIsSubmitting(false)
        setValidationError(error)
      },
    }))
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />
  }

  return (
    <Main tagName="main">
      <MainLogo />
      <Title>Добро пожаловать в Evolet</Title>

      <Form onSubmit={handleFormSubmit} onChange={formChangeHandler}>
        <Text error={validationError?.message ? true : false}>
          {validationError?.message 
            ? 'Неверные учетные данные' 
            : 'Введите свои учетные данные'}
        </Text>

        <Input
          name="login"
          type="text"
          placeholder="Логин"
          defaultValue={login}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => setLogin(evt.target.value)}
          errorMessage={validationError?.errors?.login?.[0]}
        />

        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          defaultValue={password}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)}
          errorMessage={validationError?.errors?.password?.[0]}
        />

        <Button
          type="submit"
          success
          disabled={isSubmitting}
        >
          {isSubmitting && <Spinner />}
          Войти в систему
        </Button>
      </Form>
    </Main>
  )
}

export default LoginPage
