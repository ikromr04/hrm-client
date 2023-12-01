import { Navigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { useAppSelector } from '@/hooks'
import { getAuthorizationStatus } from '@/store/employee-slice/employees-selector'
import { AppRoute, AuthorizationStatus } from '@/const'

function PrivateRoute({ children }: PropsWithChildren): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus)

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <>{children}</>
      : <Navigate to={AppRoute.Auth.Login} />
  )
}

export default PrivateRoute
