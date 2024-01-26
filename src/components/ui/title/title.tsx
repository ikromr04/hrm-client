import { StyledTitle } from './styled'
import { PropsWithChildren } from 'react'

type TitleProps = PropsWithChildren<{
  className?: string
  tagName?: string
  small?: boolean
  large?: boolean
  [rest: string]: unknown
}>

function Title({
  children,
  className,
  tagName,
  small,
  large,
  ...rest
}: TitleProps): JSX.Element {
  return (
    <StyledTitle
      className={className}
      as={tagName}
      small={small}
      large={large}
      {...rest}
    >
      {children}
    </StyledTitle>
  )
}

export default Title
