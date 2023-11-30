import { Navigate } from 'react-router-dom'
import { AppRoute, AuthorizationStatus } from '../../const'
import { useAppSelector } from '../../hooks'
import { getAuthorizationStatus } from '../../store/employees-slice/employees-selector'
import { PropsWithChildren } from 'react'

function PrivateRoute({ children }: PropsWithChildren): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus)

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <>{children}</>
      : <Navigate to={AppRoute.Login} />
  )
}

export default PrivateRoute
