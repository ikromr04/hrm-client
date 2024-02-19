import { ReactNode } from 'react'
import { StyledInfo } from './styled'

function Info({
  children,
  className,
  top,
  right,
  bottom,
  left,
}: {
  children: ReactNode
  className?: string
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}): ReactNode {
  return (
    <StyledInfo
      className={className}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </StyledInfo>
  )
}

export default Info
