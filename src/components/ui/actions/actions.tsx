import { ReactNode } from 'react'
import { Wrapper } from './styled'

function Actions({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}): ReactNode {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Actions
