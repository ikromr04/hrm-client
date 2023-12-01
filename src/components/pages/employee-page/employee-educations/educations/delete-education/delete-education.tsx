import { BaseSyntheticEvent, useState } from 'react'
import { DeleteButton } from './styled'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { Education } from '@/types/employee'
import { useAppDispatch } from '@/hooks'
import { deleteEmployeeEducationAction } from '@/store/employee-slice/employees-api-actions'
import DeleteIcon from '@/components/icons/delete-icon'
import Info from '@/components/ui/info/info'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import Hr from '@/components/ui/hr/hr'
import Buttons from '@/components/ui/buttons/buttons'
import Button from '@/components/ui/button/button'

type DeleteEducationProps = {
  education: Education
}

function DeleteEducation({ education }: DeleteEducationProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault()
    evt.target.setAttribute('disabled', 'disabled')
    dispatch(deleteEmployeeEducationAction({
      educationId: education.id,
      successHandler() {
        evt.target.removeAttribute('disabled')
        toast.success('Образование удалена')
        setIsOpen(false)
      },
    }))
  }

  return (
    <>
      <DeleteButton type="button" onClick={() => setIsOpen(true)}>
        <DeleteIcon width={16} height={16} />
        <Info right>Удалить</Info>
      </DeleteButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <Text>Вы уверены что хотите удалить это образование?</Text>
        <Text>
          ({dayjs(education.startedAt).format('YYYY')} - {dayjs(education.graduatedAt).format('YYYY')}) {education.institution}
        </Text>
        <Hr />
        <Buttons>
          <Button
            type="submit"
            success
            onClick={handleSubmitButtonClick}
          >
            Удалить
          </Button>
          <Button
            type="button"
            error
            onClick={() => setIsOpen(false)}
          >
            Отмена
          </Button>
        </Buttons>
      </Modal>
    </>
  )
}

export default DeleteEducation
