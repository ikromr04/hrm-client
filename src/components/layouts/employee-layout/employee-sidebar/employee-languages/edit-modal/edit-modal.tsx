import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import { Dispatch, SetStateAction } from 'react'
import Form from '@/components/ui/form/form'

type EditModalProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function EditModal({ isOpen, setIsOpen }: EditModalProps): JSX.Element {

  return (
    <Modal isOpen={isOpen}>
      <Form>
        <Actions>
          <Button
            type="submit"
            success
          >
            Редактировать
          </Button>
          <Button
            type="reset"
            error
            onClick={() => setIsOpen(false)}
          >
            Отмена
          </Button>
        </Actions>
      </Form>
    </Modal>
  )
}

export default EditModal