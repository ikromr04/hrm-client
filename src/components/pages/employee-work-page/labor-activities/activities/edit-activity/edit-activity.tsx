import { useState } from 'react'
import { EditButton } from './styled'
import { Activity } from '@/types/employee'
import EditIcon from '@/components/icons/edit-icon'
import Info from '@/components/ui/info/info'
import Modal from '@/components/ui/modal/modal'
import EditActivityForm from '@/components/forms/edit-activity-form/edit-activity-form'

type EditActivityProps = {
  activity: Activity
}

function EditActivity({ activity }: EditActivityProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpen(true)}>
        <EditIcon width={16} height={16} />
        <Info left>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <EditActivityForm 
          activity={activity} 
          closeModalHandler={() => setIsOpen(false)} 
        />
      </Modal>
    </>
  )
}

export default EditActivity
