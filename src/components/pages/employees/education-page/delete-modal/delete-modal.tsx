import DeleteIcon from '@/components/icons/delete-icon'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Form from '@/components/ui/form/form'
import Info from '@/components/ui/info/info'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useAppDispatch } from '@/hooks'
import { deleteEducationAction } from '@/store/api-actions'
import { Education, Educations } from '@/types/educations'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

function DeleteModal({
  education,
  setEducations,
}: {
  education: Education
  setEducations: Dispatch<SetStateAction<Educations | null>>
}): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useAppDispatch()

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(deleteEducationAction({
      id: education.id,
      successHandler() {
        toast.success('Данные успешно удалены.')
        setIsSubmitting(false)
        setIsOpen(false)
        setEducations((prevEducations) => 
          (prevEducations || []).filter((prevEducation) => prevEducation.id !== education.id
        ))
      },
    }))
  }

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        <DeleteIcon /> <Info top>Удалить</Info>
      </Button>
      <Modal isOpen={isOpen}>
        <Form onSubmit={handleFormSubmit}>
          <Text>
            Вы уверены что хотите удалить это образование? <br />
            ({education.institution})
          </Text>

          <Actions>
            <Button
              type="submit"
              success
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Удалить
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
    </>
  )
}

export default DeleteModal
