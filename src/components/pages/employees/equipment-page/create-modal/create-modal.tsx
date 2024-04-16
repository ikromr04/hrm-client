import PlusIcon from '@/components/icons/plus-icon'
import { CreateButton } from './styled'
import Info from '@/components/ui/info/info'
import { ChangeEvent, Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useFormValidation } from '@/hooks/use-form-validation'
import Form from '@/components/ui/form/form'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import { useAppDispatch } from '@/hooks'
import { storeEquipmentAction } from '@/store/api-actions'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Input from '@/components/ui/input/input'
import { Equipments } from '@/types/equipments'
import { EquipmentsStoreDTO } from '@/dto/equipments-dto'

function CreateModal({
  setEquipments
}: {
  setEquipments: Dispatch<SetStateAction<Equipments | null>>
}): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const ref = useRef<HTMLInputElement | null>(null)
  const dispatch = useAppDispatch()
  const params = useParams()
  const [dto, setDTO] = useState<EquipmentsStoreDTO>({
    user_id: params.id || '',
    title: '',
    info: '',
  })

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(storeEquipmentAction({
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler(equipment) {
        toast.success('Оборудование успешно добавлено.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
        setDTO({ user_id: params.id || '', title: '', info: '' })
        setEquipments((prevEquipments) => {
          if (prevEquipments) {
            return [equipment, ...prevEquipments]
          }
          return [equipment]
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
    setDTO({ user_id: params.id || '', title: '', info: '' })
  }

  return (
    <>
      <CreateButton type="button" onClick={handleCreateButtonClick}>
        <PlusIcon /> <Info top>Добавить</Info>
      </CreateButton>
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
            label="Оборудование"
            defaultValue={dto.title}
            errorMessage={validationError.errors?.title?.[0]}
            autoComplete="off" />

          <Input
            name="info"
            label="Информация (необязательное)"
            defaultValue={dto.info}
            errorMessage={validationError.errors?.info?.[0]}
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
