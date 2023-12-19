import { useState } from 'react'
import { EditButton } from './styled'
import { Education } from '@/types/employees'
import EditIcon from '@/components/icons/edit-icon'
import Info from '@/components/ui/info/info'
import Modal from '@/components/ui/modal/modal'
import EditEducationForm from '@/components/forms/edit-education-form/edit-education-form'

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
        <EditEducationForm 
          education={education} 
          closeModalHandler={() => setIsOpen(false)} 
        />
      </Modal>
    </>
  )
}

export default EditEducation
