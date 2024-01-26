import { PropsWithChildren } from 'react'
import { StyledInfo } from './styled'

type InfoProps = PropsWithChildren<{
  className?: string
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}>

function Info({ children, className, top, right, bottom, left }: InfoProps): JSX.Element {
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
