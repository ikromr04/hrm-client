import { PropsWithChildren } from 'react'
import { StyledBox } from './styled'
import { Link } from 'react-router-dom'

type BoxProps = PropsWithChildren<{
  className?: string
  tagName?: string | typeof Link
  [rest: string]: unknown
}>

function Box({ children, className, tagName, ...rest }: BoxProps): JSX.Element {
  return (
    <StyledBox
      className={className}
      as={tagName}
      {...rest}
    >
      {children}
    </StyledBox>
  )
}

export default Box
