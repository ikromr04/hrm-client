import Info from '@/components/ui/info/info'
import { ChangeEvent, Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useFormValidation } from '@/hooks/use-form-validation'
import Form from '@/components/ui/form/form'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import { useAppDispatch } from '@/hooks'
import { updateEquipmentAction } from '@/store/api-actions'
import { toast } from 'react-toastify'
import Input from '@/components/ui/input/input'
import EditIcon from '@/components/icons/edit-icon'
import { Equipment, Equipments } from '@/types/equipments'
import { EquipmentsUpdateDTO } from '@/dto/equipments-dto'

function EditModal({
  equipment,
  setEquipments,
}: {
  equipment: Equipment
  setEquipments: Dispatch<SetStateAction<Equipments | null>>
}): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [dto, setDTO] = useState<EquipmentsUpdateDTO>({})

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateEquipmentAction({
      id: equipment.id,
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
        setEquipments((prevEquipments) =>
          (prevEquipments || []).map((prevEquipment) =>
            (prevEquipment.id === activity.id) ? activity : prevEquipment
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
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
          onReset={handleFormReset}
        >
          <Input
            ref={ref}
            name="title"
            label="Оборудование"
            defaultValue={equipment.title}
            errorMessage={validationError.errors?.title?.[0]}
            autoComplete="off" />
          <Input
            name="info"
            label="Информация (необязательное)"
            defaultValue={equipment.info}
            errorMessage={validationError.errors?.info?.[0]}
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
