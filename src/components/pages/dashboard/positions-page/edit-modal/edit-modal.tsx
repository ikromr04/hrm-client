import { ChangeEvent, useRef, useState } from 'react'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useFormValidation } from '@/hooks/use-form-validation'
import Form from '@/components/ui/form/form'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import { useAppDispatch } from '@/hooks'
import { toast } from 'react-toastify'
import Input from '@/components/ui/input/input'
import { Position } from '@/types/positions'
import { updatePositionAction } from '@/store/position-slice/position-api-actions'
import { PositionsUpdateDTO } from '@/dto/positions-dto'

type EditModalProps = {
  position: Position
}

function EditModal({ position }: EditModalProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [dto, setDTO] = useState<PositionsUpdateDTO>({ title: position.title })

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updatePositionAction({
      id: position.id,
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler() {
        toast.success('Данные успешно обновлены.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
        setDTO({ title: position.title })
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
    setDTO(({ title: evt.target.value }))
    setIsDisabled(() => validationError.message ? true : false)
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setIsDisabled(true)
    setValidationError({ message: '' })
    setDTO({ title: position.title })
  }

  return (
    <>
      <Button type="button" warning onClick={handleEditButtonClick}>
        Редактировать
      </Button>
      <Modal isOpen={isOpen}>
        <Text error>{validationError?.message}</Text> <br />
        <Form
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
          onReset={handleFormReset}
        >
          <Input
            ref={ref}
            name="title"
            label="Позиция"
            defaultValue={dto.title}
            errorMessage={validationError.errors?.title?.[0]}
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