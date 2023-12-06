import { useState } from 'react'
import { CreateButton } from './styled'
import PlusIcon from '@/components/icons/plus-icon'
import Info from '@/components/ui/info/info'
import Modal from '@/components/ui/modal/modal'
import CreateActivityForm 
  from '@/components/forms/create-activity-form/create-activity-form'

function CreateActivity(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <CreateButton type="button" onClick={() => setIsOpen(true)}>
        <PlusIcon width={16} height={16} />
        <Info right>Добавить опыта работы</Info>
      </CreateButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <CreateActivityForm closeModalHandler={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export default CreateActivity
