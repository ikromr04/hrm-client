import { useState } from 'react'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import Form from '@/components/ui/form/form'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import { useAppDispatch } from '@/hooks'
import { toast } from 'react-toastify'
import { Department } from '@/types/departments'
import { deleteDepartmentAction } from '@/store/department-slice/department-api-actions'

type DeleteModalProps = {
  department: Department
}

function DeleteModal({ department }: DeleteModalProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useAppDispatch()

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(deleteDepartmentAction({
      id: department.id,
      successHandler() {
        toast.success('Данные успешно обновлены.')
        setIsSubmitting(false)
        setIsOpen(false)
      },
    }))
  }

  return (
    <>
      <Button type="button" error onClick={() => setIsOpen(true)}>
        Удалить
      </Button>
      <Modal isOpen={isOpen}>
        <Text>Вы уверены что хотите удалить отдел "{department.title}"?</Text> <br />
        <Form onSubmit={handleFormSubmit}>
          <Actions>
            <Button
              type="submit"
              success
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Удалить
            </Button>
            <Button type="reset" error onClick={() => setIsOpen(false)}>
              Отмена
            </Button>
          </Actions>
        </Form>
      </Modal>
    </>
  )
}

export default DeleteModal