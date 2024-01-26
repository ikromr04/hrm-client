import { PropsWithChildren } from 'react'
import { Button, StyledBox } from './styled'

type CopyBoxProps = PropsWithChildren<{
  copyText?: string
}>

function CopyBox({ children, copyText }: CopyBoxProps): JSX.Element {
  return (
    <StyledBox>
      <Button copyText={copyText} />
      {children}
    </StyledBox>
  )
}

export default CopyBox