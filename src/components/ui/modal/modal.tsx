import { PropsWithChildren } from 'react'
import { ModalInner, StyledModal } from './styled'

type ModalProps = PropsWithChildren<{
  isOpen: boolean
}>

function Modal({ children, isOpen }: ModalProps): JSX.Element {
  return (
    <StyledModal isOpen={isOpen}>
      <ModalInner>{children}</ModalInner>
    </StyledModal>
  )
}

export default Modal
