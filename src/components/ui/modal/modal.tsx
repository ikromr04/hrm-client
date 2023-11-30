import { PropsWithChildren, useEffect } from 'react'
import { ModalInner, StyledModal } from './styled'
import { useModalClose } from '../../../hooks/use-modal-close'

type ModalProps = PropsWithChildren<{
  isOpen: boolean
  closeModalHandler: () => void
}>

function Modal({ children, isOpen, closeModalHandler }: ModalProps): JSX.Element {
  const ref = useModalClose(() => closeModalHandler())

  useEffect(() => {
    isOpen
      ? document.body.classList.add('modal-shown')
      : document.body.classList.remove('modal-shown')
    return () => document.body.classList.remove('modal-shown')
  }, [isOpen])

  return (
    <StyledModal isOpen={isOpen}>
      <div ref={ref}>
        <ModalInner>{isOpen && children}</ModalInner>
      </div>
    </StyledModal>
  )
}

export default Modal
