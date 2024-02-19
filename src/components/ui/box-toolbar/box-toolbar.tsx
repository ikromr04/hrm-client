import { ReactNode } from 'react'
import { StyledToolbar } from './styled'

function BoxToolbar({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <StyledToolbar className={className}>{children}</StyledToolbar>
}

export default BoxToolbar
