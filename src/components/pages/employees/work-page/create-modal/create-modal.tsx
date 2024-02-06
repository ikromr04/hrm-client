import PlusIcon from '@/components/icons/plus-icon'
import { CreateButton } from './styled'
import Info from '@/components/ui/info/info'
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useFormValidation } from '@/hooks/use-form-validation'
import Form from '@/components/ui/form/form'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import { useAppDispatch } from '@/hooks'
import { storeActivityAction } from '@/store/api-actions'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Input from '@/components/ui/input/input'
import { Activities } from '@/types/activities'
import { ActivitiesStoreDTO } from '@/dto/activities-dto'
import Colspan from '@/components/ui/colspan/colspan'

type CreateModalProps = {
  setActivities: Dispatch<SetStateAction<Activities | null>>
}

function CreateModal({ setActivities }: CreateModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const ref = useRef<HTMLInputElement | null>(null)
  const dispatch = useAppDispatch()
  const params = useParams()
  const [dto, setDTO] = useState<ActivitiesStoreDTO>({ user_id: params.id || '', organization: '',
    job: '', hired_at: '', dismissed_at: '' })

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(storeActivityAction({
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler(activity) {
        toast.success('Деятельность успешно добавлена.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
        setDTO({ user_id: params.id || '', organization: '', job: '', hired_at: '', dismissed_at: '' })
        setActivities((prevActivities) => {
          if (prevActivities) {
            return [ activity, ...prevActivities ]
          }
          return [activity]
        })
      },
    }))
  }

  const handleCreateButtonClick = () => {
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
    setDTO({ user_id: params.id || '', organization: '', job: '', hired_at: '', dismissed_at: '' })
  }

  return (
    <>
      <CreateButton type="button" onClick={handleCreateButtonClick}>
        <PlusIcon /> <Info top>Добавить</Info>
      </CreateButton>
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
              defaultValue={dto.organization}
              errorMessage={validationError.errors?.organization?.[0]}
              autoComplete="off" />
          </Colspan>
          <Input
            name="job"
            label="Должность"
            defaultValue={dto.job}
            errorMessage={validationError.errors?.job?.[0]}
            autoComplete="off" />
          <Input
            name="hired_at"
            type="date"
            label="Начало работы"
            defaultValue={dto.hired_at}
            errorMessage={validationError.errors?.hired_at?.[0]}
            autoComplete="off" />
          <Input
            name="dismissed_at"
            type="date"
            label="Дата уволнения"
            defaultValue={dto.dismissed_at}
            errorMessage={validationError.errors?.dismissed_at?.[0]}
            autoComplete="off" />

          <Actions>
            <Button
              type="submit"
              success
              loading={isSubmitting}
              disabled={isDisabled || isSubmitting}
            >
              Добавить
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

export default CreateModal