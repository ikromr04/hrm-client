import { ChangeEvent, ReactNode, useRef, useState } from 'react'
import { useFormValidation } from '@/hooks/use-form-validation'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import Input from '@/components/ui/input/input'
import Form from '@/components/ui/form/form'
import Text from '@/components/ui/text/text'
import { useAppDispatch } from '@/hooks'
import { toast } from 'react-toastify'
import PlusIcon from '@/components/icons/plus-icon'
import { DepartmentsStoreDTO } from '@/dto/departments-dto'
import { storeDepartmentAction } from '@/store/department-slice/department-api-actions'

function AddDepartment(): ReactNode {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dto, setDTO] = useState<DepartmentsStoreDTO>({ title: '' })
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleAddButtonClick = () => {
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

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(storeDepartmentAction({
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler() {
        toast.success('Новый отдел/департамент успешно добавлен.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
      },
    }))
  }

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    formChangeHandler(evt)
    setDTO({ title: evt.target.value })
    setIsDisabled(false)
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setIsDisabled(true)
    setValidationError({ message: '' })
    setDTO({ title: ''})
  }

  return (
    <>
      <Button type="button" success onClick={handleAddButtonClick}>
        <PlusIcon /> Добавить отдел/департамент
      </Button>
      <Modal isOpen={isOpen}>
        <Text error>{validationError?.message}</Text> <br />
        <Form
          key={isOpen.toString().padStart(1, '0')}
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
          onReset={handleFormReset}
        >
          <Input
            ref={ref}
            name="title"
            label="Отдел/департамент"
            errorMessage={validationError.errors?.title?.[0]}
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

export default AddDepartment
