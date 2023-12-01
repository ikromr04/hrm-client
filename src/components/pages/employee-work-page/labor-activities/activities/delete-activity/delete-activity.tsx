import { BaseSyntheticEvent, useState } from 'react'
import Info from '../../../../../ui/info/info'
import Modal from '../../../../../ui/modal/modal'
import { DeleteButton } from './styled'
import DeleteIcon from '../../../../../icons/delete-icon'
import { Activity } from '../../../../../../types/employee'
import dayjs from 'dayjs'
import Text from '../../../../../ui/text/text'
import Hr from '../../../../../ui/hr/hr'
import Buttons from '../../../../../ui/buttons/buttons'
import Button from '../../../../../ui/button/button'
import { toast } from 'react-toastify'
import {
  deleteEmployeeActivityAction
} from '../../../../../../store/employee-slice/employees-api-actions'
import { useAppDispatch } from '../../../../../../hooks'

type DeleteActivityProps = {
  activity: Activity
}

function DeleteActivity({ activity }: DeleteActivityProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault()
    evt.target.setAttribute('disabled', 'disabled')
    dispatch(deleteEmployeeActivityAction({
      activityId: activity.id,
      successHandler() {
        evt.target.removeAttribute('disabled')
        toast.success('Удаление прошла успешно')
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
        <Text>Вы уверены что хотите удалить эту деятельность?</Text>
        <Text>
          ({dayjs(activity.hiredAt).format('YYYY')} - {dayjs(activity.dismissedAt).format('YYYY')}) {activity.organization}
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

export default DeleteActivity
