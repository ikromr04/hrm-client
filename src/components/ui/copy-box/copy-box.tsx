import { ReactNode } from 'react'
import { Button, StyledBox } from './styled'

function CopyBox({
  children,
  copyText,
}: {
  children: ReactNode
  copyText?: string
}): ReactNode {
  return (
    <StyledBox>
      <Button copyText={copyText} />
      {children}
    </StyledBox>
  )
}

export default CopyBox
