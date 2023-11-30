import { useState } from 'react'
import EditIcon from '../../../../../icons/edit-icon'
import Info from '../../../../../ui/info/info'
import Modal from '../../../../../ui/modal/modal'
import { EditButton } from './styled'
import { Education } from '../../../../../../types/employee'
import EditEducationForm from '../../../../../forms/edit-education-form/edit-education-form'

type EditEducationProps = {
  education: Education
}

function EditEducation({ education }: EditEducationProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpen(true)}>
        <EditIcon width={16} height={16} />
        <Info left>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <EditEducationForm education={education} closeModalHandler={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export default EditEducation
