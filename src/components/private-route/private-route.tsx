import { Navigate } from 'react-router-dom'
import { PropsWithChildren, ReactNode } from 'react'
import { useAppSelector } from '@/hooks'
import { AppRoute, AuthorizationStatus } from '@/const'
import { getAuthStatus } from '@/store/auth-slice/auth-selector'

function PrivateRoute({ children }: PropsWithChildren): ReactNode {
  const authStatus = useAppSelector(getAuthStatus)

  return (
    authStatus === AuthorizationStatus.Auth
      ? <>{children}</>
      : <Navigate to={AppRoute.Auth.Login} />
  )
}

export default PrivateRoute
