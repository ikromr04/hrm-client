import { ReactNode, useEffect, useState } from 'react'
import { StyledButton } from './styled'
import XIcon from '@/components/icons/x-icon'
import Spinner from '../spinner/spinner'

function ButtonWithTimeout({
  children,
  clickHandler,
  timeout,
  ...rest
}: {
  children: ReactNode
  clickHandler: () => void
  timeout: number
  [rest: string]: unknown
}): ReactNode {
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (showConfirmation) {
      timer = setTimeout(() => {
        clickHandler()
        setShowConfirmation(false)
      }, timeout)
    }

    return () => clearTimeout(timer)
  }, [showConfirmation, clickHandler, timeout])

  return (
    <StyledButton onClick={() => setShowConfirmation(!showConfirmation)} {...rest}>
      {showConfirmation ? <>
          <Spinner />
          <XIcon />
        </> : children}
    </StyledButton>
  )
}

export default ButtonWithTimeout
