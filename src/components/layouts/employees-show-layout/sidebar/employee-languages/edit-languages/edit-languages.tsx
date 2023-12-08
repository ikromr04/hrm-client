import { useState } from 'react'
import { EditButton } from './styled'
import EditIcon from '@/components/icons/edit-icon'
import Info from '@/components/ui/info/info'
import Modal from '@/components/ui/modal/modal'
import EmployeeLanguagesForm 
  from '@/components/forms/employee-languages-form.tsx/employee-languages-form'

function EditLanguages(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpen(true)}>
        <EditIcon width={16} height={16} />
        <Info top>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <EmployeeLanguagesForm closeModalHandler={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export default EditLanguages
