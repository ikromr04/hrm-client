import { PropsWithChildren } from 'react'
import { StyledBoxInner } from './styled'

type BoxInnerProps = PropsWithChildren<{
  clasName?: string
  tagName?: string
}>

function BoxInner({ children, clasName, tagName }: BoxInnerProps): JSX.Element {
  return (
    <StyledBoxInner
      className={clasName}
      as={tagName}
    >
      {children}
    </StyledBoxInner>
  )
}

export default BoxInner
