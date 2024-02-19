import { BaseSyntheticEvent, ReactNode } from 'react'
import { ModalInner, StyledModal } from './styled'

function Modal({
  children,
  isOpen,
}: {
  children: ReactNode
  isOpen: boolean
}): ReactNode {
  const handleModalClick = (evt: BaseSyntheticEvent) => {
    if (evt.target === evt.currentTarget) {
      evt.target.children[0].classList.add('shake')
        setTimeout(() => {
          evt.target.children[0].classList.remove('shake')
        }, 300)
    }
  }

  return (
    <StyledModal isOpen={isOpen} onClick={handleModalClick}>
      <div>
        <ModalInner>{children}</ModalInner>
      </div>
    </StyledModal>
  )
}

export default Modal
