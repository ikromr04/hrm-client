import Info from '@/components/ui/info/info'
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'
import Modal from '@/components/ui/modal/modal'
import Text from '@/components/ui/text/text'
import { useFormValidation } from '@/hooks/use-form-validation'
import Form from '@/components/ui/form/form'
import Actions from '@/components/ui/actions/actions'
import Button from '@/components/ui/button/button'
import { useAppDispatch } from '@/hooks'
import { EducationsUpdateDTO } from '@/dto/educations-dto'
import { updateEducationAction } from '@/store/api-actions'
import { toast } from 'react-toastify'
import Input from '@/components/ui/input/input'
import Select from '@/components/ui/select/select'
import { educationFormOptions } from '@/const'
import { Education, Educations } from '@/types/educations'
import EditIcon from '@/components/icons/edit-icon'
import Colspan from '@/components/ui/colspan/colspan'

type EditModalProps = {
  education: Education
  setEducations: Dispatch<SetStateAction<Educations | null>>
}

function EditModal({ education, setEducations }: EditModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const ref = useRef<HTMLInputElement | null>(null)
  const [dto, setDTO] = useState<EducationsUpdateDTO>({})

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateEducationAction({
      id: education.id,
      dto,
      errorHandler(error) {
        setValidationError(error)
        setIsSubmitting(false)
        setIsDisabled(true)
      },
      successHandler(education) {
        toast.success('Данные успешно обновлены.')
        setIsSubmitting(false)
        setIsDisabled(true)
        setIsOpen(false)
        setDTO({})
        setEducations((prevEducations) => 
          (prevEducations || []).map((prevEducation) => 
            (prevEducation.id === education.id) ? education : prevEducation
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

  const handleEducationFormChange = (value: string) => {
    setDTO((prevDTO) => ({ ...prevDTO, form: value }))
    setIsDisabled(() => validationError.message ? true : false)
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
              name="institution"
              label="Учебное заведение"
              defaultValue={education.institution}
              errorMessage={validationError.errors?.institution?.[0]}
              autoComplete="off" />
          </Colspan>
          <Colspan span={2}>
            <Input
              name="faculty"
              label="Факультет"
              defaultValue={education.faculty}
              errorMessage={validationError.errors?.faculty?.[0]}
              autoComplete="off" />
          </Colspan>
          <Input
            name="speciality"
            label="Специальность"
            defaultValue={education.speciality}
            errorMessage={validationError.errors?.speciality?.[0]}
            autoComplete="off" />
          <Select
            label="Форма обучения"
            value={education.form}
            onChange={handleEducationFormChange}
            options={educationFormOptions} />
          <Input
            name="started_at"
            type="datetime-local"
            label="Год поступления"
            defaultValue={education.startedAt}
            errorMessage={validationError.errors?.started_at?.[0]}
            autoComplete="off" />
          <Input
            name="graduated_at"
            type="datetime-local"
            label="Год окончания"
            defaultValue={education.graduatedAt}
            errorMessage={validationError.errors?.graduated_at?.[0]}
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