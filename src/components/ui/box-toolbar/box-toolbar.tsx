import { PropsWithChildren } from 'react'
import { StyledToolbar } from './styled'

type BoxToolbarProps = PropsWithChildren<{
  className?: string
}>

function BoxToolbar({ className, children }: BoxToolbarProps) {
  return (
    <StyledToolbar className={className}>{children}</StyledToolbar>
  )
}

export default BoxToolbar
