import Info from '@/components/ui/info/info'
import { ChangeEvent, Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useFormValidation } from '@/hooks/use-form-validation'
import Form from '@/components/ui/form/form'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import { useAppDispatch } from '@/hooks'
import { updateActivityAction } from '@/store/api-actions'
import { toast } from 'react-toastify'
import Input from '@/components/ui/input/input'
import EditIcon from '@/components/icons/edit-icon'
import { Activities, Activity } from '@/types/activities'
import { ActivitiesUpdateDTO } from '@/dto/activities-dto'
import Colspan from '@/components/ui/colspan/colspan'

function EditModal({
  activity,
  setActivities,
}: {
  activity: Activity
  setActivities: Dispatch<SetStateAction<Activities | null>>
}): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [dto, setDTO] = useState<ActivitiesUpdateDTO>({})

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateActivityAction({
      id: activity.id,
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler(activity) {
        toast.success('Данные успешно обновлены.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
        setDTO({})
        setActivities((prevActivities) => 
          (prevActivities || []).map((prevActivity) => 
            (prevActivity.id === activity.id) ? activity : prevActivity
        ))
      },
    }))
  }

  const handleEditButtonClick = () => {
    setIsOpen(true)
    setTimeout(() => {
      if (ref.current) {
        const value = ref.current.value
        ref.current.value = ''
        ref.current.focus()
        ref.current.value = value
      }
    }, 150)
  }

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    formChangeHandler(evt)
    setDTO((prevDTO) => ({ ...prevDTO, [evt.target.name]: evt.target.value }))
    setIsDisabled(() => validationError.message ? true : false)
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setIsDisabled(true)
    setValidationError({ message: '' })
    setDTO({})
  }

  return (
    <>
      <Button type="button" onClick={handleEditButtonClick}>
        <EditIcon /> <Info top>Редактировать</Info>
      </Button>
      <Modal isOpen={isOpen}>
        <Text error>{validationError?.message}</Text> <br />
        <Form
          grid
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
          onReset={handleFormReset}
        >
          <Colspan span={2}>
            <Input
              ref={ref}
              name="organization"
              label="Организация"
              defaultValue={activity.organization}
              errorMessage={validationError.errors?.organization?.[0]}
              autoComplete="off" />
          </Colspan>
          <Input
            name="job"
            label="Должность"
            defaultValue={activity.job}
            errorMessage={validationError.errors?.job?.[0]}
            autoComplete="off" />
          <Input
            name="hired_at"
            type="date"
            label="Начало работы"
            defaultValue={activity.hiredAt}
            errorMessage={validationError.errors?.hired_at?.[0]}
            autoComplete="off" />
          <Input
            name="dismissed_at"
            type="date"
            label="Дата уволнения"
            defaultValue={activity.dismissedAt}
            errorMessage={validationError.errors?.dismissed_at?.[0]}
            autoComplete="off" />

          <Actions>
            <Button
              type="submit"
              success
              loading={isSubmitting}
              disabled={isDisabled || isSubmitting}
            >
              Сохранить
            </Button>
            <Button type="reset" error>
              Отмена
            </Button>
          </Actions>
        </Form>
      </Modal>
    </>
  )
}

export default EditModal
