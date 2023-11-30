import { BaseSyntheticEvent, useState } from 'react'
import Info from '../../../../../ui/info/info'
import Modal from '../../../../../ui/modal/modal'
import { DeleteButton } from './styled'
import DeleteIcon from '../../../../../icons/delete-icon'
import { Education } from '../../../../../../types/employee'
import dayjs from 'dayjs'
import Text from '../../../../../ui/text/text'
import Hr from '../../../../../ui/hr/hr'
import Buttons from '../../../../../ui/buttons/buttons'
import Button from '../../../../../ui/button/button'
import { toast } from 'react-toastify'
import { deleteEmployeeEducationAction } from '../../../../../../store/employees-slice/employees-api-actions'
import { useAppDispatch } from '../../../../../../hooks'

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
