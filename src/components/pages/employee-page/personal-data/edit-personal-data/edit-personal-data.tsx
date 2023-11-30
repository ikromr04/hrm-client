import { useState } from 'react'
import EditIcon from '../../../../icons/edit-icon'
import Info from '../../../../ui/info/info'
import Modal from '../../../../ui/modal/modal'
import { EditButton } from './styled'
import EditPersonalDataForm from '../../../../forms/edit-personal-data-form/edit-personal-data-form'

function EditPersonalData(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpen(true)}>
        <EditIcon width={16} height={16} />
        <Info right>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <EditPersonalDataForm closeModalHandler={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export default EditPersonalData
