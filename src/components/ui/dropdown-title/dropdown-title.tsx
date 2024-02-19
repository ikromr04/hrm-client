import { PropsWithChildren, ReactNode } from 'react'
import { Title } from './styled'

function DropdownTitle({ children }: PropsWithChildren): ReactNode {
  return <Title>{children}</Title>
}

export default DropdownTitle
