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
import { EducationsStoreDTO } from '@/dto/educations-dto'
import { storeEducationAction } from '@/store/api-actions'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Input from '@/components/ui/input/input'
import Select from '@/components/ui/select/select'
import { educationFormOptions } from '@/const'
import { Educations } from '@/types/educations'
import Colspan from '@/components/ui/colspan/colspan'

function CreateModal({
  setEducations
}: {
  setEducations: Dispatch<SetStateAction<Educations | null>>
}): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const ref = useRef<HTMLInputElement | null>(null)
  const dispatch = useAppDispatch()
  const params = useParams()
  const [dto, setDTO] = useState<EducationsStoreDTO>({ user_id: params.id || '', institution: '',
    faculty: '', form: 'Очно', speciality: '', started_at: '', graduated_at: ''})

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(storeEducationAction({
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler(education) {
        toast.success('Образование успешно добавлено.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
        setDTO({ user_id: params.id || '', institution: '', faculty: '',
          form: 'Очно', speciality: '', started_at: '', graduated_at: ''})
        setEducations((prevEducations) => {
          if (prevEducations) {
            return [ education, ...prevEducations ]
          }
          return [education]
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
    setDTO({ user_id: params.id || '', institution: '', faculty: '',
      form: 'Очно', speciality: '', started_at: '', graduated_at: ''})
  }

  const handleEducationFormChange = (value: string) => {
    setDTO((prevDTO) => ({ ...prevDTO, form: value }))
    setIsDisabled(() => validationError.message ? true : false)
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
              name="institution"
              label="Учебное заведение"
              defaultValue={dto.institution}
              errorMessage={validationError.errors?.institution?.[0]}
              autoComplete="off" />
          </Colspan>
          <Colspan span={2}>
            <Input
              name="faculty"
              label="Факультет"
              defaultValue={dto.faculty}
              errorMessage={validationError.errors?.faculty?.[0]}
              autoComplete="off" />
          </Colspan>
          <Input
            name="speciality"
            label="Специальность"
            defaultValue={dto.speciality}
            errorMessage={validationError.errors?.speciality?.[0]}
            autoComplete="off" />
          <Select
            label="Форма обучения"
            value={dto.form}
            onChange={handleEducationFormChange}
            options={educationFormOptions} />
          <Input
            name="started_at"
            type="date"
            label="Год поступления"
            defaultValue={dto.started_at}
            errorMessage={validationError.errors?.started_at?.[0]}
            autoComplete="off" />
          <Input
            name="graduated_at"
            type="date"
            label="Год окончания"
            defaultValue={dto.graduated_at}
            errorMessage={validationError.errors?.graduated_at?.[0]}
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
