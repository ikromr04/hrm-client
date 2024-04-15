import { PropsWithChildren, ReactNode } from 'react'
import { useAppSelector } from '@/hooks'
import { getUser } from '@/store/auth-slice/auth-selector'

function AdminComponents({ children }: PropsWithChildren): ReactNode {
  const user = useAppSelector(getUser)

  if (user?.role.name != 'admin') {
    return null
  }

  return children
}

export default AdminComponents
