import { updateEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { ChangeEvent, ReactNode, useRef, useState } from 'react'
import { useFormValidation } from '@/hooks/use-form-validation'
import { EmployeesUpdateDTO } from '@/dto/employees-dto'
import Actions from '@/components/ui/actions/actions'
import EditIcon from '@/components/icons/edit-icon'
import Button from '@/components/ui/button/button'
import Modal from '@/components/ui/modal/modal'
import Input from '@/components/ui/input/input'
import Form from '@/components/ui/form/form'
import { Employee } from '@/types/employees'
import Info from '@/components/ui/info/info'
import Text from '@/components/ui/text/text'
import { useAppDispatch } from '@/hooks'
import { toast } from 'react-toastify'
import { EditButton } from './styled'
import Select from '@/components/ui/select/select'
import { FAMILY_STATUSES, GENDERS, NO_CHILDREN } from '@/const'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { getYears } from '@/utils/employees'
import dayjs from 'dayjs'

function EditModal({
  employee
}: {
  employee: Employee
}): ReactNode {
  const { formChangeHandler, setValidationError, validationError } = useFormValidation()
  const [dto, setDTO] = useState<EmployeesUpdateDTO>({
    details: {
      gender: employee.details?.gender,
      family_status: employee.details?.familyStatus,
      children: employee.details?.children,
    }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef<HTMLInputElement | null>(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleEditButtonClick = () => {
    setIsOpen(true)
    setTimeout(() => ref.current?.focus(), 150)
  }

  const handleFormSubmit = (evt: SubmitEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(updateEmployeeAction({
      id: employee.id,
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
      },
    }))
  }

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    formChangeHandler(evt)
    setDTO((prevDTO) => ({
      details: { ...prevDTO.details, [evt.target.name]: evt.target.value }
    }))
    setIsDisabled(() => validationError.message ? true : false)
    setValidationError({ message: '' })
  }

  const handleFormReset = () => {
    setIsOpen(false)
    setIsDisabled(true)
    setValidationError({ message: '' })
    setDTO({
      details: {
        gender: employee.details?.gender,
        family_status: employee.details?.familyStatus,
        children: employee.details?.children,
      }
    })
  }

  const handleGenderChange = (value: string) => {
    setDTO((prevDTO) => ({
      details: { ...prevDTO.details, gender: value }
    }))
    setIsDisabled(false)
  }

  const handleFamilyStatusChange = (value: string) => {
    setDTO((prevDTO) => ({
      details: { ...prevDTO.details, family_status: value }
    }))
    setIsDisabled(false)
  }

  const handleChildrenChange = (value: string[]) => {
    setDTO((prevDTO) => ({
      details: { ...prevDTO.details, children: value }
    }))
    setIsDisabled(false)
  }

  return (
    <>
      <EditButton type="button" onClick={handleEditButtonClick}>
        <EditIcon /> <Info top>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen}>
        <Text error>{validationError?.message}</Text> <br />
        <Form
          grid
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
          onReset={handleFormReset}
        >
          <Input
            ref={ref}
            key={(+isOpen).toString().padStart(2)}
            name="nationality"
            label="Национальность"
            defaultValue={employee.details?.nationality}
            errorMessage={validationError.errors?.['details.nationality']?.[0]}
            autoComplete="off" />
          <Input
            name="birth_date"
            type="date"
            label="Дата рождения"
            defaultValue={dayjs(employee.details?.birthDate).format('YYYY-MM-DD')}
            errorMessage={validationError.errors?.['details.birth_date']?.[0]}
            autoComplete="off" />
          <Select
            label="Пол"
            value={dto.details?.gender || ''}
            options={[
              { value: '', label: 'Не указано' },
              ...GENDERS.map((gender) => ({ value: gender, label: gender }))
            ]}
            onChange={handleGenderChange} />
          <Input
            name="citizenship"
            label="Гражданство"
            defaultValue={employee.details?.citizenship}
            errorMessage={validationError.errors?.['details.citizenship']?.[0]}
            autoComplete="off" />
          <Input
            name="address"
            label="Адрес"
            defaultValue={employee.details?.address}
            errorMessage={validationError.errors?.['details.address']?.[0]}
            autoComplete="off" />
          <Input
            name="email"
            label="Электронная почта"
            defaultValue={employee.details?.email}
            errorMessage={validationError.errors?.['details.email']?.[0]}
            autoComplete="off" />
          <Input
            name="tel_1"
            label="Тел 1"
            defaultValue={employee.details?.tel1}
            errorMessage={validationError.errors?.['details.tel_1']?.[0]}
            autoComplete="off" />
          <Input
            name="tel_2"
            label="Тел 2"
            defaultValue={employee.details?.tel2}
            errorMessage={validationError.errors?.['details.tel_2']?.[0]}
            autoComplete="off" />
          <Select
            label="Семейное положение"
            value={dto.details?.family_status || ''}
            options={[
              { value: '', label: 'Не указано' },
              ...FAMILY_STATUSES.map((status) => ({ value: status, label: status }))
            ]}
            onChange={handleFamilyStatusChange} />
          <MultiSelect
            key={(+isOpen).toString().padStart(3)}
            label="Дети (выберите год рождения)"
            value={dto?.details?.children || []}
            onChange={handleChildrenChange}
            placeholder="Выберите возраст детей"
            options={[
              { value: '', label: 'Не указать' },
              { value: NO_CHILDREN, label: NO_CHILDREN },
              ...getYears(1970).map((year) => ({ value: year, label: year }))
            ]} />

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
