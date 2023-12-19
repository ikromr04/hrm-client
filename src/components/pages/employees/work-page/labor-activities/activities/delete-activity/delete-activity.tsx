import { BaseSyntheticEvent, useState } from 'react'
import { DeleteButton } from './styled'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { Activity } from '@/types/employees'
import { useAppDispatch } from '@/hooks'
import { deleteEmployeeActivityAction } from '@/store/employee-slice/employees-api-actions'
import DeleteIcon from '@/components/icons/delete-icon'
import Info from '@/components/ui/info/info'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import Hr from '@/components/ui/hr/hr'
import Buttons from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'

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
